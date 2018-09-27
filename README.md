# Monogatari
Built to bring Visual Novels to the modern web and take them to the next level, making it easy for anyone to create and distribute Visual Novels in a simple way so that anyone can enjoy them on pretty much anywhere, create games with features that no one has ever imagined... it is time for Visual Novels to Evolve.

Website: https://monogatari.io/

Demo: https://monogatari.io/demo/

## Features
- Responsive out of the box
- Plays nice with Electron for Desktop apps and Cordova for mobile apps
- Simple Syntax
- Progressive Web App Features allowing offline game play
- Allows you to use any kind of media supported by browsers
- Compatible with all major browsers
- Includes libraries for animations and particle effects
- Allows saving/loading games
- Extensible, you just can't imagine how much!

## What do I need to get Started?
The first thing about Monogatari that you should probably know is that with it, your visual novel is a web page first and a game later. That means that Monogatari has been created specifically for the web, putting things like responsiveness (the fact that your game will adapt to any screen or device size) first. You don't necessarily need to think of your game this way as well, but you'll certainly take the most out of Monogatari if you do.

### Set up your environment

To develop in Monogatari you would need the same as to develop a webpage, you just need a text editor capable of editing HTML, Javascript and CSS, which means that pretty much any text editor should work, even Windows NotePad but to make it easier, you probably want one with code syntax highlighting.

Some recommended (and free) ones include:

* [Atom](https://atom.io/)
* [Brackets](http://brackets.io/)
* [Visual Studio Code](https://code.visualstudio.com)

Take a look at them and pick the one you like the most and feel comfortable with, this will be your main tool from now on.

Now, you can always open a website by just clicking the file (index.html) and opening it with your browser, however there are small aspects of Monogatari that work better when served through a web server. You don't need anything fancy for this, in fact there's a perfectly fine web server you can [download from the Chrome Store](https://chrome.google.com/webstore/detail/web-server-for-chrome/ofhbbkphhbklhfoeikjpcbhemlocgigb)

As previously mentioned, the use of a web server is completely optional, you can just open your game with the browser as a file and it will run just fine, the web server will allow you to test features such as the Service Workers, needed for Monogatari's offline support and asset preloading.

### Workflow

Ok so now you have the environment set up, you have some idea on what the files you got are for so how can you start developing your game?

1. Try the game first, open the index.html file inside the directory you just unzipped and play the sample game through.
2. Once you've played it once, open the directory (the one you unzipped) with the editor you chose to start making changes.
3. Open the script.js file with your editor, find the variable called ˋscriptˋ, as you'll see, all the dialogs you just saw are just a simple list in there. More information can be found in [the documentation](https://m	onogatari.io/documentation/script/text/).
4. Change one of the dialogs, save the file and reload the game (just like you reload a website).
5. Play it again and you'll see the dialog changed just like you made it.
6. Now try adding more dialog to it and you'll quickly get how things are done.
7. Once you've gotten yourself used to adding dialogs, [add a scene](https://monogatari.io/documentation/script/scenes/) as a challenge, that means you'll have to add your image file to the ˋimg/scenes/ directoryˋ, more instructions are on the link.

If you manage to do all that, congratulations! You just made your first game and are probably more familiarized with the workflow you'll be using, just make changes, save, reload, try and repeat!

## Documentation
You can take a look at the documentation in https://monogatari.io/documentation/

You can also contribute to it in the [Documentation repository](https://github.com/Monogatari/Documentation)


## Get in Touch
If you have any doubt, problem or just want some help please contact me, I'll be glad to help in any way I can. Even though Monogatari is simple enough and you can find many resources online, I know it can be hard to get started and sometimes the documentation is not clear enough, so really, contact me anytime!

You can join the [Discord Server](https://discord.gg/gWSeDTz), send me an email, DM me at [Twitter](https://twitter.com/Hyuchia), and [Mastodon](https://mastodon.social/@HyuchiaDiego) as well.

## Contributing
Contributions are always welcome! If you have contributed to this project, or in the website, please make sure you are listed in the contributors list of the website, you can add yourself in the [contributors file](https://github.com/Monogatari/Website/blob/master/templates/contributors.html) of the website

## License
Monogatari is a Free Open Source Software project released under the [MIT License](https://raw.githubusercontent.com/Monogatari/Monogatari/master/LICENSE).



Вступление.
Вы проснулись в своем кресле от громких криков в коридоре.
 - Доктор Хаус! Доктор Хаус!
Недовольно потянувшись, вы встаете и идете к двери своего кабинета.
Открыв ее, вы сталкиваетесь с молоденькой медсестрой из приемного отделения.
- Как хорошо, что я вас нашла! У нас небывалый случай. В приемной сидят три человека, они утверждают, что у них болит рука! У всех троих одновременно. Но они не знакомы друг с другом и поступили к нам из разных частей города.
- О БОЖЕЕЕ! Это действительно небывалый случай. Приступ вселенской глупости в маленькой юной голове. Что такого в этих случаях?
- Но ведь они приехали к нам одновременно, и все говорят о боли в руке.
- Люди лгут. Возможно, у них вообще болит нога, голова или Ж…
- Но вы должны взглянуть…Это … необычные пациенты!
-Необычные? Ну хорошо. Я, пожалуй, посмотрю, что там происходит.
Кадр 1.
Приемная.
// В коридоре на кушетке понуро сидят три персонажа: Геральт, Лара Крофт и Чак Норрис.
Хаус подходит к Геральту:
- Выглядите вы неплохо для своей профессии. Что беспокоит?
Геральт:
- Можно подумать, вы выглядите отлично для своей профессии.
На самом деле меня вела дорога приключений, пока меня не прострелило… Рука болит, если короче.
Хаус
Рука болит? Невероятно. Покажите.
- Осмотреть больное место
- Взять анализ крови.


Хаус подходит к Ларе Крофт.
- Добрый день. Что привело мисс треугольный бюст в наше заведение?
Лара (угрюмо)
- Я прошла через сотни опасностей, преодолела тысячи километров – и все было хорошо. А сегодня я проснулась от боли в руке…Не знаю, что могло случиться.
Хаус
Очень печальная история.
- Осмотреть больное место
- Взять анализ крови.


Хаус подходит к Чаку Норрису:
- Легенды мирового кинематографа. Сегодня явно солнце зашло в дом к луне, и они танцуют танго. Попрошу только не вырезать автограф на спине моих медсестер лазером.
Что могло с вами случиться?
Чак
Он меня укусил!
Хаус
Ох, бедный. Очевидно, что его заставили. Он не мог сам на такое решиться.
- Осмотреть больное место
- Взять анализ крови.


Осмотреть больное место – отображается картинка с укусом в зависимости от персонажа.
Взять анализ крови.
Слайд с Геральтом
Хаус
Мы исследовали вашу кровь и обнаружили там следы стрептококков. Кажется, вас укусило какое -то грязное животное.
Геральт
Фу! Хотя, где мне взять чистых животный, я сам вечно по колено в болоте.
-Дать антибиотик
- Дать антидот
- Тут уже ничем не поможешь
- Да у вас волчанка!

Слайд с Ларой
Хаус
Мы исследовали вашу кровь и обнаружили там большую дозу яда. Кажется, вас укусила змея.
Лара
Змея? Какая-то веревка с глазами заставила меня идти к врачу? Ужасно, я, кажется, старею.
-Дать антибиотик
- Дать антидот
- Тут уже ничем не поможешь
- Да у вас волчанка!


Слайд с Чаком
Хаус обращается к чужому
Мне очень жаль, но мы обнаружили в вашей крови частички Чака Норриса.
Чужой
Ш-Ш-Ш-Ш-Ш
Хаус
Да. Это крайне опасно.
-Дать антибиотик
- Дать антидот
- Тут уже ничем не поможешь
- Да у вас волчанка!

Лечение
Прошел день.
Геральт - Дать антибиотик
Спустя несколько дней Геральт выздоравливает и продолжает свой путь, полный опасностей и приключений. Смотря на него, вы понимаете, что у вас много общего. Работа полна рисков и опасностей, каждый день – это борьба с очередным злом, сидящим внутри живого существа. Как хорошо, что в этой битве вы оба постоянно выходите победителями.
Совет:
Помните, если вас укусило дикое животное, немедленно обратитесь к врачу, подробно расскажите о случившемся и получите соответствующее лечение. Такой укус может привести к заражению крови, бешенству. Не следует заниматься самолечением.
Бешенство – крайне опасная, смертельная болезнь, а заражение крови может грозить ампутацией конечностей и параличом. При правильном и своевременном лечении всех последствий можно избежать.


Геральт – Дать антидот
Через несколько дней Геральт вернулся в больницу, но узнать его уже никто не смог. Это было чудовище, дикое и нелюдимое. Антидот был неправильным лечением для того, кто не был отравлен. Он плохо повлиял на организм ведьмака, и тот снова мутировал. Но мутация была неконтролируемой, поэтому вышло то, что вышло. Вам должно быть стыдно. У него было заражение крови, которое легко лечится антибиотиком.
Совет:
Если вас укусила змея, ни в коем случае:
-  не разрезайте рану
- не прикладывайте к ране землю или траву
- не прижигайте место укуса
- не накладывайте жгут выше места укуса.
- не употребляйте алкоголь.
Что нужно сделать:
1.	Вызвать скорую помощь.
2.	Отсосать яд, перевязать рану, приложить лед
3.	Дать пострадавшему антигистаминные препараты Тавегил, Димедрол.
4.	Дать пострадавшему глюкокортикостероидные препараты (Преднизолон или Дексаметазон)
5.	Постараться не нервничать и успокоить пострадавшего.

Геральт- Тут уже не поможешь
Вы решаете, что ведьмаку уже никак не помочь и отправляете его домой, выдав склянку со спиртом, чтобы облегчить страдания. Но Геральт не просто так дожил до своих лет. Спустя пару месяцев вы встречаете его в очереди за чучелом единорога. Геральт выглядит хорошо и бодро, он провел много времени в медитации, благодаря чему вылечился. Вам становится стыдно, ведь разгадка была так близка. У него было заражение крови, которое легко лечится антибиотиком.
Совет:
Не занимайтесь самолечением и не пускайте болезнь на самотек. Если у вас или ваших близких ухудшилось самочувствие, проявились необычные симптомы, но нет возможности обратиться к врачу – воспользуйтесь возможностями удаленной консультации с врачом через приложение SmartMed. Залог вашего здоровья - ответственное к себе отношение.


Геральт – Да у вас волчанка!
Геральт одним взмахом меча убивает врача. Пациентов продолжает принимать медсестра.
Вы проиграли.

Лара Крофт - Дать антибиотик
Вы прописали лечение и с чистым сердцем отпустили Лару домой. Но спустя пару дней до вас доходят ужаснейшие новости о ее смерти. Вы понимаете, что проиграли битву с чертовой веревкой с глазами. Все что вам было нужно – это дать пациенту противоядие, а не антибиотик.
Совет:
Помните, если вас укусило дикое животное, немедленно обратитесь к врачу, подробно расскажите о случившемся и получите соответствующее лечение. Такой укус может привести к заражению крови, бешенству. Не следует заниматься самолечением.


Лара Крофт - Дать антидот
Долго болеет, но выздоравливает. Продолжает стареть, потому что это неизбежно. Вы молодец!
Совет:
Яд
Если вас укусила змея, ни в коем случае:
-  не разрезайте рану
- не прикладывайте к ране землю или траву
- не прижигайте место укуса
- не накладывайте жгут выше места укуса.
- не употребляйте алкоголь.
Что нужно сделать:
1.	Вызвать скорую помощь.
2.	Отсосать яд, перевязать рану, приложить лед
3.	Дать пострадавшему антигистаминные препараты Тавегил, Димедрол.
4.	Дать пострадавшему глюкокортикостероидные препараты (Преднизолон или Дексаметазон)
5.	Постараться не нервничать и успокоить пострадавшего.

Лара - Тут уже не поможешь
Лара умирает. Потому что антидот нужно носить с собой и не умалчивать, что змея укусила тебя в кустах, пока ты дрыхла после очередного набега на сокровищницу. Но это совершенно не умаляет вашего разгильдяйства и халатного отношения к работе.
Совет:
Не занимайтесь самолечением и не пускайте болезнь на самотек. Если у вас или ваших близких ухудшилось самочувствие, проявились необычные симптомы, но нет возможности обратиться к врачу – воспользуйтесь возможностями удаленной консультации с врачом через приложение SmartMed. Залог вашего здоровья -ответственное к себе отношение.

Лара - Да у вас волчанка!
Вы авторитетно заявили, что диагноз Лары -волчанка. Она была категорически не согласна с данными результатами, но ее никто не слушал. Ведь вы светило науки, а она искательница приключений на пятую точку. Вскоре ее забрали в центральную клиническую больницу имени Кащенко, где она кричала, лежа на полу: «Не волчанка! Это не волчанка!». Через несколько дней она умерла от отсутствия лечения, ведь ее укусила змея и ей нужен был укол антидота.

Чужой - Дать антибиотик
Вы сделали все, что могли… К сожалению, частицы Чака Норриса в организме не лечатся, и пациент медленно сходит с ума. Что-бы вы не сделали — это не поможет. Просто дайте ему спокойно умереть.
Совет:
Помните, если вас укусило дикое животное, немедленно обратитесь к врачу, подробно расскажите о случившемся и получите соответствующее лечение. Такой укус может привести к заражению крови, бешенству. Не следует заниматься самолечением.
Бешенство – крайне опасная, смертельная болезнь, а заражение крови может грозить ампутацией конечностей и параличом. При правильном и своевременном лечении всех последствий можно избежать.

Чужой - Дать антидот
Вы сделали все, что могли… К сожалению, частицы Чака Норриса в организме не лечатся, и пациент медленно сходит с ума. Что-бы вы не сделали — это не поможет. Просто дайте ему спокойно умереть.
Совет:
Яд
Если вас укусила змея, ни в коем случае:
-  не разрезайте рану
- не прикладывайте к ране землю или траву
- не прижигайте место укуса
- не накладывайте жгут выше места укуса.
- не употребляйте алкоголь.
Что нужно сделать:
1.	Вызвать скорую помощь.
2.	Отсосать яд, перевязать рану, приложить лед
3.	Дать пострадавшему антигистаминные препараты Тавегил, Димедрол.
4.	Дать пострадавшему глюкокортикостероидные препараты (Преднизолон или Дексаметазон)
5.	Постараться не нервничать и успокоить пострадавшего.
Чужой - Тут уже не поможешь.
Нам жаль, но это нанесло травму не только пациенту, но и вам. Видеть мучения бедного ксеноморфа и не иметь возможности ему помочь – испытание не из легких.
Чужой - Да у вас волчанка!
Вы диагностировали у ксеноморфа волчанку. Это большая радость для него и для вас. Ведь она поддается лечению, а вот проросшие частицы Чака в организме – нет.














