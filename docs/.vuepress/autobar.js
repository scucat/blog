var fs = require('fs');
var path = require('path');
const yaml = require('js-yaml');
const docs_dir = path.resolve(__dirname,'../');


function getMarkdownYaml(filePath){
    const content = fs.readFileSync(filePath, 'utf8')
    let re = /---(.*?)---/sg
    let s = re.exec(content)[1]
    let yaml_data = yaml.load(s)
    return yaml_data
}

/**
 * 文件遍历方法
 * @param filePath 需要遍历的文件路径
 */
 function fileDisplayAsync(filePath) {
    var result = []
    var files = fs.readdirSync(filePath)
    files.forEach(function(filename) {
        var filepath = path.join(filePath, filename);
        var stats = fs.statSync(filepath)
        var isFile = stats.isFile(); //是文件
        var isDir = stats.isDirectory(); //是文件夹
        var link = filepath.replace(docs_dir,'')
        link = link.replace(/\\/g,'/')
        if (isFile) {
            if (filename!='README.md') {
                result.push(link)
            }
        }
        if (isDir) {
            item = {
                text:filename
            }
            var file_readme_path = path.join(filepath,"README.md")
            
            if (fs.existsSync(file_readme_path)) {
                item.link = link + '/'
                var yaml_data = getMarkdownYaml(file_readme_path)
                if (yaml_data && yaml_data.title) {
                    item.text = yaml_data.title
                }
            }
            var children = fileDisplayAsync(filepath) //递归，如果是文件夹，就继续遍历该文件夹下面的文件
            if (children.length>0) {
                item.children = children
                item.collapsible = true
            }
            result.push(item)
        }

    })
    
    return result
}


//要遍历的文件夹所在的路径
var sidebar = {}

var bases = fs.readdirSync(docs_dir)
bases.forEach(function(name){
    if (name!=".vuepress" && name!="README.md") {
        var link = "/"+name+"/"
        var list = [link+"README.md"]
        var filepath = path.resolve(docs_dir,name)
        var children = fileDisplayAsync(filepath)
        children.forEach(function(item){
            list.push(item)
        })
        sidebar[link] = list
    }
})



exports.sidebar = sidebar
