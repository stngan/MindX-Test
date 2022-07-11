HTML/CSS/JS
Kiến thức về HTML-----------------------------------------------------------------------------------------------------------

1. viết code html để liên kết file js & css từ page.html & index.html cấu trúc thư mục sau. Cây thư mục của các file hiện tại

ở index.html

<link rel="stylesheet" href="/assets/css/index.css">
<script src="/assets/js/index.js"></script>

ở page.html

<link rel="stylesheet" href="./css/page.css">
<script src="./js/page.js"></script>

2. Hãy nêu sự khác biệt giữa <textarea> & <input> elements
   <input>
- Là trường 1 dòng
- Thường được dùng để user nhập input

    <textarea>
- Là trường đa dòng, cho phép enter
- Thường được dùng để user nhập vào mô tả 1 cái gì đó, message, soạn thảo,..

3. Làm một combobox như hình
<p>Choose your favorite Animal</p>
<select name="animal" id="animalSelect"> 
    <option selected="selected" value="0" disabled>Choose your option</option>
    <option value="cat">Cat</option>
    <option value="dog">Dog</option>
    <option value="rabbit">Rabbit</option>
    <option value="fox">Fox</option>
    <option value="tiger">Tiger</option>
    <option value="lynx">Lynx</option>
    <option value="others">Others</option>
</select>

Kiến thức về CSS-----------------------------------------------------------------------------------------------------------
1. Liệt kê 5 CSS pseudo class/element
CSS pseudo class
:hover
:focus
:check
:is()
:valid

CSS pseudo element
::before
::after
::first-line 
::selection
::marker

2. Hãy nêu sự khác nhau của hệ màu RGBA so với RGB
RGBA có A(Alpha) là độ trong suốt của màu RGB, chạy từ 0.0 -> 1.0, 1 là màu rõ nhất, giảm dần về 0 màu sẽ càng trong suốt

3. Sử dụng thuộc tính CSS phù hợp khiến một hình ảnh (vuông) trở thành hình tròn.
border-radius: 50%;

4. Chỉ sử dụng CSS, hãy di chuyển vị trí các ô trở nên sang như hình mẫu với cấu trúc HTML/CSS cho sẵn
<div class="container border">
    <div class="rectangle red"></div>
    <div class="square green"></div>
    <div class="square green"></div>
    <div class="square yellow"></div>
    <div class="square yellow"></div>
    <div class="rectangle blue"></div>
</div>
<style>
.red{
    background-color: red;
}
.yellow{
    background-color: yellow;
}
.green{
    background-color: green;
}
.blue{
    background-color: blue;
    margin-top: 100px;
}
.container {
    position: relative;
    left: 0;
    top: 0;
    width: 600px;
    height: 600px;
    display: flex;
    flex-wrap: wrap;
    justify-content: flex-start;
}
.square{
    width: 200px;
    height: 200px;
    margin-right: 100px;
}
.rectangle{
    width: 300px;
    height: 100px;
}
</style>

Kiến thức về JS-----------------------------------------------------------------------------------------------------------
1. Có bao nhiêu cách viết vòng lặp for? Nêu cấu trúc phù hợp với các loại vòng lặp?
4 vòng lặp for trong JS:
- for
- for in
- while 
- do while 

2. Kết quả của đoạn code là gì? Giải thích

