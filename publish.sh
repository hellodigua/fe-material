echo '开始执行发布任务'
rm -rf www
git clone git@e.coding.net:hellodigua/fe-demo.digua.me.git www
cd ./www
mv .git ../.git_backup
rm -rf *
cd .. && mv .git_backup ./www/.git
echo '开始安装'
npm i
echo '开始打包'
npm run generate
mv ./dist/* www
echo '开始提交'
cd www
git add --all .
git commit -m "update"
git push -u origin master
echo '任务结束'
