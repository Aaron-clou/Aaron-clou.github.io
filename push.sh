

# 本脚本:push并同步到gitee

GITHUB_REPO=git@github.com:Aaron-clou/dafnycommunity.git

comment=$1

if [ ! $comment ]; 
then
comment="111更新内容+action自动部署"
fi

git add -A

git commit -m "${comment}"  

git push $GITHUB_REPO   

