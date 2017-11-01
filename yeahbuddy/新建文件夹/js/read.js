function addLis() {
    var xlf = document.getElementById('xlf');
    var drop = document.getElementById('drop');
    drop.addEventListener("dragenter", handleDragover, false);
    drop.addEventListener("dragover", handleDragover, false);
    drop.addEventListener("drop", onDropDown, false);
    if(xlf.addEventListener) xlf.addEventListener('change', handleFile, false);
}

addLis();

function handleDragover(e) {
    e.stopPropagation();
    e.preventDefault();
    e.dataTransfer.dropEffect = 'copy';
}

function onDropDown(e) {
    e.stopPropagation();
    e.preventDefault();
    var files = e.dataTransfer.files;
    var f = files[0];
    readFile(f);
}

function handleFile(e) {
    var files = e.target.files;
    var f = files[0];
    readFile(f);
}

function readFile(file) {

    // var name = file.name;
    var reader = new FileReader();
    reader.onload = function (e) {
        var data = e.target.result;
        var wb = XLSX.read(data, { type: "binary" });
        let tempData = wb.Sheets.sheet1;
        temList = [];
        for(let i in tempData){
            if (i[0] == 'D'){
                // console.log(tempData[i]['h'])
                temList.push(tempData[i]['h'])
            }
        }
        console.log(temList);
    };
    reader.readAsBinaryString(file);
}
function download1() {
    let star = document.getElementById("star").value;
    let end = document.getElementById("end").value;
    let n = 1;
    for(let i = star; i<end;i++){
        n += 1
        setTimeout(function(){
            let url = "https://scm.asus.com/SCMeOutsourcing/GenReportFile.aspx?Report_Type=PO&SOURCE_NO=" + temList[i];
            console.log(url)
            let link = document.createElement("a");
            link.href = url;
            link.style = "visibility:hidden";
            link.download = 'test';
            document.body.appendChild(link);
            link.click()
            document.body.removeChild(link)
        },n*3000);
    }
    // alert("下载完成！！")
}