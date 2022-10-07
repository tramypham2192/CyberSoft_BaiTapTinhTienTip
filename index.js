document.querySelector("#btnTinhTien").onclick = function(){
    //lay input cua user
    let tongTien = Number(document.querySelector('#tongTienThanhToan').value);
    let phanTramTip = Number(document.querySelector('#phanTramTip').value);
    let soNguoiTip = Number(document.querySelector('#soNguoiTip').value);
    //tinh toan output
    let tienTipTrenNguoi = 0;
    tienTipTrenNguoi = tongTien * phanTramTip/100/soNguoiTip;
    console.log(tienTipTrenNguoi);
    //hien thi output
    document.querySelector('#tienTipTrenNguoi').innerHTML = tienTipTrenNguoi;
}