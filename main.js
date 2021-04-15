var canvas = new fabric.Canvas('myCanvas');
player_x = 10;
player_y = 10;
block_image_width = 30;
block_image_hight = 30;
 
var player_object = "";
var block_image_object = "";

function player_update()
{
    fabric.Image.fromURL("player.png", function(Img) {
player_object = Img;
player_object.scaleToWidth(150);
player_object.scaleToHeight(140);
player_object.set(
    { 
        top:player_y, left:player_x
     });
     canvas.add(player_object)
    });
}

function new_image(get_image)
{
    fabric.Image.fromURL(get_image, function(Img) {
block_image_object = Img;
block_image_object.scaleToWidth(block_image_width);
block_image_object.scaleToHeight(block_image_hight);
block_image_object.set(
    { 
        top:player_y, left:player_x
     });
     canvas.add(block_image_object)
    });
}
window.addEventListener("keydown" , my_keydown);
function my_keydown (e) {
    keypresed = e.keyCode;
    if(keypresed == '87'){
        new_image('wall.jpg')
    }
    if(keypresed == '71'){
        new_image('ground.png')
    }
    if(keypresed == '76'){
        new_image('light_green.png')
    }
    if(keypresed == '84'){
        new_image('trunk.jpg')
    }
    if(keypresed == '82'){
        new_image('roof.jpg')
    }
    if(keypresed == '89'){
        new_image('yellow_wall.png')
    }
    if(keypresed == '68'){
        new_image('dark_green.png')
    }
    if(keypresed == '85'){
        new_image('unique.png')
    }
    if(keypresed == '67'){
        new_image('cloud.png')
    }
    if(e.shiftKey == true && keypresed == '80'){
        block_image_width = block_image_width + 10;
        block_image_hight = block_image_hight + 10;
    }
    if(e.shiftKey == true && keypresed == '77'){
        block_image_width = block_image_width - 10;
        block_image_hight = block_image_hight - 10;
        new_image();
    }
    if(keypresed == '38'){
        up();
        }
        if(keypresed == '40'){
            down();
            }
            if(keypresed == '37'){
                left();
                }
                if(keypresed == '39'){
                    right();
                    }
}
function up() {
    if(player_y >=0){
        player_y = player_y - block_image_width;
        canvas.remove(player_object);
        player_update();
    }
}
function down() {
    if(player_y <=500){
        player_y = player_y + block_image_hight;
        canvas.remove(player_object);
        player_update();
    }
}
function left() {
    if(player_x >=0){
        player_x = player_x - block_image_width;
        canvas.remove(player_object);
        player_update();
    }
}
function right() {
    if(player_x <=850){
        player_x = player_x + block_image_width;
        canvas.remove(player_object);
        player_update();
    }
}