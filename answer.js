// *** YOUR ANSWER BELOW ***
function oldMan(num){
  let str = "";

  while(num > 0){
    let obj = "";

    switch(num){
      case 1: obj = "thumb"; break;
      case 2: obj = "shoe"; break;
      case 3: obj = "knee"; break;
      case 4: obj = "door"; break;
      case 5: obj = "hive"; break;
      case 6: obj = "sticks"; break;
      case 7: obj = "heaven"; break;
      case 8: obj = "plate"; break;
      case 9: obj = "spine"; break;
      case 10: obj = "shin"; break;
      default: obj = "pillow"; break;
    }

    num--;

    str += `This old man, he played ${num}. He played knick-knack on my ${obj}. With a knick-knack, paddy-whack, Give your dog a bone. This old man came rolling home.`
  }
  return str;
}
