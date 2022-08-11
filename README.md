# WP Easy Start Framework
```
npm i
npm run start
```


.dblock - @extend .dblock - для всяких :before/:after элементов
.align-center-parent - идеальное выравнивание по центру (горизонтально и вертикально), задавать родительскому. элемент что центровать - .align-center
.justify-child - родительский элемент, блоки внутри будут по всей ширине


## TODO
### Projects for investigae
https://looka.com/editor/94235340

<meta name="keywords" content="машина сломалась на дороге,  вскрытие машины, замена колеса, ремонт замка зажигания, подвоз топлива, запуск двигателя, прикурить, техпомощь">
<meta name="description" content="Помощь на дорогах 24/7! Звоните +79060300002 Мы Вам поможем! Диагностика Вашей машины,  запуск двигателя, замена колеса, подвоз топлива, ремонт замка зажигания, изготовление ключей, вскрытие Вашей машины. ">

https://adac.vn.ua/
https://express-t.ua/uk/poslugi/evakuatory
https://www.express-evakuator.com.ua/
https://towtruck.com.ua/
https://эвакуаторк.рф/calculate/
https://evakuator-v.moscow/
https://www.evacuator-moskva.ru/
hero https://evak.moscow/
price https://techneu.ru/
price https://эвакуаторк.рф/
https://evacuator-msk.ru/
https://tehmobil.ru/
https://evakuatormoskva.com/
simple https://evakuator-voronovo.ru/
https://эвакуатор-дёшево.москва/
type of tech https://evakuator-sos.ru/
reviews https://evotax.ru/1-2/
https://vizvat-evakuator.ru/
https://эвакуатортут.рф/
https://эвакуатор-дёшево.рус/
cool colors https://mosevo.ru/
https://help-car.ru

## CSS SCSS 
https://www.cssportal.com/scss-to-css/
https://clean-css.github.io/
https://www.cssportal.com/css-optimize/
https://css2sass.herokuapp.com/

### Gradients
  * @include linear-gradient(yellow, blue);
  * @include linear-gradient(to top, red 0%, green 50%, orange 100%);
  * @include linear-gradient(45deg, orange 0%, pink 50%, green 50.01%, green 50.01%, violet 100%);

### px 2 rm
https://github.com/thoughtbot/bourbon/blob/master/app/assets/stylesheets/functions/_px-to-em.scss
// Convert pixels to ems
// eg. for a relational value of 12px write em(12) when the parent is 16px
// if the parent is another value say 24px write em(12, 24)


### Triangle generator
 * https://github.com/thoughtbot/bourbon/blob/master/app/assets/stylesheets/addons/_triangle.scss
 * @include triangle(12px, gray, down);
 * @include triangle(12px 6px, gray lavender, up-left);
 * The $size argument can take one or two values—width height.
 * The $color argument can take one or two values—foreground-color background-color.
 * $direction: up, down, left, right, up-right, up-left, down-right, down-left


### Fonts
 * @font-face mixin
 * Bulletproof font-face via Font Squirrel
 * @include fontface('family', 'assets/fonts/', 'myfontname');
