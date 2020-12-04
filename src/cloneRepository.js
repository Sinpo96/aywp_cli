const downloadGitRepo = require('download-git-repo');
const ora = require('ora');

/**
 * @desc 克隆 github 的仓库
 * @param repositoryName 仓库名
 * @param fileName 落盘的文件夹名称
 */
const clone = (repositoryName, fileName) => {
    return new Promise((resolve, reject) => {
        const githubRepository = `aiyongbao/${repositoryName}`;
        console.log(githubRepository);
        const progress = ora(`cloning ${ repositoryName } .....`);
        progress.start();
        downloadGitRepo(githubRepository, fileName, { clone: true }, (err) => {
            if (err) {
                progress.fail(`clone 出错: ${err}`);
                reject(err);
            } else {
                progress.succeed(`clone ${ repositoryName } success !`);
                resolve();
            }
        })
    })
}

module.exports = clone;
