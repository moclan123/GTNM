Hướng dẫn include file header và footer
1. thêm thẻ <script src="./Scripts/include.js"></script> vào head
2. Ở body thêm: 
    + <div class="header-wrap" w3-include-html="./header.html"></div> ở đầu
    + <div w3-include-html="./footter.html"></div> ở cuối
3. Thêm thẻ <script>includeHTML();</script> vào cuối thẻ body
Xem file index để xem ví dụ