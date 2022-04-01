import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import chalk from 'chalk'
const log = console.log
const docsRoot = path.join(__dirname, '..', '..', '..', 'docs')

function readFileList(excludeFiles = [''], dir = docsRoot, filesList = []) {
  const files = fs.readdirSync(dir)
  files.forEach((item, index) => {
    let filePath = path.join(dir, item)
    const stat = fs.statSync(filePath)
    if (!(excludeFiles instanceof Array)) {
      log(chalk.yellow(`error: 传入的参数不是一个数组。`))
    }
    excludeFiles.forEach((excludeFile) => {
      if (stat.isDirectory() && item !== '.vuepress' && item !== '@pages' && item !== excludeFile) {
        readFileList(excludeFiles, path.join(dir, item), filesList)
      } else {
        if (path.basename(dir) !== 'docs') {
          const fileNameArr = path.basename(filePath).split('.')
          let name = null,
            type = null
          if (fileNameArr.length === 2) {
            name = fileNameArr[0]
            type = fileNameArr[1]
          } else if (fileNameArr.length === 3) {
            name = fileNameArr[1]
            type = fileNameArr[2]
          } else {
            log(chalk.yellow(`warning: 该文件 "${filePath}" 没有按照约定命名，将忽略生成相应数据。`))
            return
          }
          if (type === 'md') {
            filesList.push({
              name,
              filePath
            })
          }
        }
      }
    })
  })
  return filesList
}

function readTotalFileWords(excludeFiles = ['']) {
  const filesList = readFileList(excludeFiles)
  var wordCount = 0
  filesList.forEach((item) => {
    const content = getContent(item.filePath)
    var len = counter(content)
    wordCount += len[0] + len[1]
  })
  if (wordCount < 1000) {
    return wordCount
  }
  return Math.round(wordCount / 100) / 10 + 'k'
}

function readEachFileWords(excludeFiles = [''], cn, en) {
  const filesListWords = []
  const filesList = readFileList(excludeFiles)
  filesList.forEach((item) => {
    const content = getContent(item.filePath)
    var len = counter(content)

    var readingTime = readTime(len, cn, en)
    var wordsCount = 0
    wordsCount = len[0] + len[1]
    if (wordsCount >= 1000) {
      wordsCount = Math.round(wordsCount / 100) / 10 + 'k'
    }

    const fileMatterObj = matter(content, {})
    const matterData = fileMatterObj.data
    filesListWords.push({ ...item, wordsCount, readingTime, ...matterData })
  })
  return filesListWords
}

function readTime(len, cn = 300, en = 160) {
  var readingTime = len[0] / cn + len[1] / en
  if (readingTime > 60 && readingTime < 60 * 24) {
    let hour = parseInt(readingTime / 60)
    let minute = parseInt(readingTime - hour * 60)
    if (minute === 0) {
      return hour + 'h'
    }
    return hour + 'h' + minute + 'm'
  } else if (readingTime > 60 * 24) {
    let day = parseInt(readingTime / (60 * 24))
    let hour = parseInt((readingTime - day * 24 * 60) / 60)
    if (hour === 0) {
      return day + 'd'
    }
    return day + 'd' + hour + 'h'
  }
  return readingTime < 1 ? '1' : parseInt(readingTime * 10) / 10 + 'm'
}

function getContent(filePath) {
  return fs.readFileSync(filePath, 'utf8')
}

function counter(content) {
  const cn = (content.match(/[\u4E00-\u9FA5]/g) || []).length
  const en = (content.replace(/[\u4E00-\u9FA5]/g, '').match(/[a-zA-Z0-9_\u0392-\u03c9\u0400-\u04FF]+|[\u4E00-\u9FFF\u3400-\u4dbf\uf900-\ufaff\u3040-\u309f\uac00-\ud7af\u0400-\u04FF]+|[\u00E4\u00C4\u00E5\u00C5\u00F6\u00D6]+|\w+/g) || []).length
  return [cn, en]
}

export { readFileList, readTotalFileWords, readEachFileWords }
