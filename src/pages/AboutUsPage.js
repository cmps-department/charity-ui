import people from "../images/title/people.png";
import flag from "../images/title/flag.png";
import team from "../images/title/team.png";
import work from "../images/title/work.png";
import leaders from "../images/title/leaders.png";
import handheart from "../images/title/handheart.png";
import front from "../images/title/front.png";
import back from "../images/title/back.png";
import designers from "../images/title/designers.png";
import Title from "../components/Title";


function AboutUsPage() {
  return (
    <main className="container max-w-xl mx-auto my-15 px-4">
      <Title imageUrl={people} alt="aboutus" title="Про нас"/>
      <div className="flex flex-col gap-x-4 my-10">
        <div className="w-full bg-bg-400 rounded-3xl flex p-6">
          <div className="p-4 flex flex-col justify-center mx-auto">
            <p className="text-gray-700 text-xl text-left my-4">Ми-сервіс для створення благодійних зборів</p>
            <div className="flex items-center my-4">
              <h2 className="text-4xl font-bold mb-2 text-left">Давай створимо нашу Націю разом!</h2>
              <img src={flag} alt="flag" style={{ width: '40px', height: '40px' }} />
            </div>
            <p className="text-gray-700 text-xl text-left my-4">
              Росія вторглася в Україну продемонструвавши свою небезпеку для всього світу.
              Ми захищаємо всю планету від тиранії та жорстокості. Настав час продемонструвати свою підтримку миру
              та демократії заради дітей, заради людей України і нації!
            </p>
          </div>
          <img src={handheart} alt="handheart" style={{ width: '350px', height: '300px' }}/>
        </div>
        <div className="my-4 w-full bg-bg-400 rounded-3xl flex p-6">
        <div className="p-4 flex flex-col justify-center mx-auto">
            <h2 className="text-4xl font-bold mb-2 text-left">Як ми працюємо</h2>
            <ul className="list-none pl-6">
              <li className="text-gray-700 text-xl text-left my-4 ">
                <span className="text-xl">1.</span>
                Необхідно створити оголошення про збір, бажано з підтвердженням документами та фотографіями.
              </li>
              <li className="text-gray-700 text-xl text-left my-4 ">
                <span className="text-xl">2.</span>
                Подавши заявку на розміщення збору про допомогу, наші адміністратори ретельно переглядають її.
              </li>
              <li className="text-gray-700 text-xl text-left my-4 ">
                <span className="text-xl">3.</span>
                Якщо заявка підходить по всім законодавчим умовам, наші адміністратори одобрюють її,
                в іншому випадку відхиляють її. Для обробки необхідно декілька днів.
              </li>
              <li className="text-gray-700 text-xl text-left my-4 ">
                <span className="text-xl">4.</span>
                Якщо відповідь була позитивна, тоді очікуйте на розміщення.
              </li>
            </ul>
          </div>
          <img src={work} alt="work" style={{ width: '300px', height: '300px' }}/>
        </div>
        <div className="w-full bg-bg-400 rounded-3xl flex p-6">
          <div className="p-4 flex flex-col justify-center mx-auto">
            <h2 className="text-4xl font-bold mb-2 text-left">Про команду</h2>
            <p className="text-gray-700 text-xl text-left my-4">
              Команда веб-розробників складалась з декількох талановитих фахівців, які працювали разом,
              щоб створити високоякісний веб-додаток. Кожен з них мав свої унікальні знання та навички,
              які вони використовували, щоб допомогти у розробці.Усі члени команди допомагали один одному,
              щоб забезпечити успішну розробку та запуск веб- додатку. Завдяки їхній спільній роботі та взаємодії
              було створено високоякісний та ефективний продукт.
            </p>
          </div>
          <img src={team} alt="team" style={{ width: '350px', height: '300px' }}/>
        </div>
        <div className="my-4 w-full bg-bg-400 rounded-3xl flex p-6">
        <div className="p-4 flex flex-col justify-center mx-auto">
            <h2 className="text-4xl font-bold mb-2 text-left">Керівники та координатори</h2>
            <p className="text-gray-700 text-xl text-left my-4">
              Володимир Метельов та Михайло Грошевий були організаторами та керівниками команди веб-розробників.
              Вони були відповідальні за створення планування проекту та розподіл завдань між учасниками команди.
            </p>
            <p className="text-gray-700 text-xl text-left">
              Крім того, Володимир та Михайло надавали цінні поради та консультації.
              Вони були завжди готові підтримати та надати допомогу, коли учасники команди зіткнулися з труднощами.
              Діяльність Володимира та Михайла була важливою не лише для успішного виконання проекту,
              але й для духу команди.
            </p>
          </div>
          <img src={leaders} alt="leaders" style={{ width: '350px', height: '300px' }}/>
        </div>
        <div className="my-4 w-full bg-bg-400 rounded-3xl flex p-6">
        <div className="p-4 flex flex-col justify-center mx-auto">
            <h2 className="text-4xl font-bold mb-2 text-left">Дизайнери</h2>
            <p className="text-gray-700 text-xl text-left my-4">
              Не менш важливими членами команди веб-розробників були дизайнери Данило та Маргарита,
              які відповідали за створення та дизайн сайту. Данило відповідав за створення макета веб-сайту та логотипу,
              що надало проекту виразний вигляд та ідентичність. Він працював від ідеї до концепції,
              розробляючи макети та дизайни сторінок, які були схвалені командою.
            </p>
            <p className="text-gray-700 text-xl text-left">
              Маргарита, у свою чергу, була помічником дизайнера, який допомагав створювати сторінки
              та текстовий контент для проекту. Вона тісно співпрацювала з Данилом і розуміла його концепцію дизайну,
              тому могла допомогти зробити сайт максимально ефективним і привабливим для користувачів.
            </p>
          </div>
          <img src={designers} alt="designers" style={{ width: '350px', height: '300px' }}/>
        </div>
        <div className="my-4 w-full bg-bg-400 rounded-3xl flex p-6">
        <div className="p-4 flex flex-col justify-center mx-auto">
            <h2 className="text-4xl font-bold mb-2 text-left">Front-end розробники</h2>
            <p className="text-gray-700 text-xl text-left my-4">
              Анастасія та Артем були не лише front-end розробниками, а й важливою частиною команди,
              яка працювала над веб-проектом. Вони відповідали за створення веб-інтерфейсів,
              які не тільки чудово виглядають, але й забезпечують комфортну роботу користувача. Щоб досягти цього,
              Анастасія та Артем використали свої знання та навички в html, css та javascript
              для створення якісного та ефективного веб-додатку.
            </p>
            <p className="text-gray-700 text-xl text-left">
              Але їх робота не обмежувалася написанням коду. Вони також працювали над тестуванням
              і налагодженням веб-інтерфейсів, щоб забезпечити високу якість продукту. Крім того, вони доклали зусиль,
              щоб зробити додаток доступним для користувачів з різних пристроїв і браузерів.
            </p>
          </div>
          <img src={front} alt="front" style={{ width: '350px', height: '300px' }}/>
        </div>
        <div className="my-4 w-full bg-bg-400 rounded-3xl flex p-6">
        <div className="p-4 flex flex-col justify-center mx-auto">
            <h2 className="text-4xl font-bold mb-2 text-left">Back-end розробники</h2>
            <p className="text-gray-700 text-xl text-left my-4">
              Владислав та Віктор зробили значний внесок у розвиток веб-додатку,
              працюючи над авторизацією користувачів та створенням додатків.
              Завдяки їх роботі користувачі могли легко входити в свій профіль і створювати програми,
              які зберігалися в базі даних. Вони також працювали над дизайном функціональності сторінки,
              щоб забезпечити простий і зрозумілий інтерфейс користувача.
            </p>
            <p className="text-gray-700 text-xl text-left">
              Владислав і Віктор забезпечили безпеку даних користувачів шляхом розробки авторизації та аутентифікації.
              Вони також розробили функціонал для створення та збереження запитів,
              що дозволило користувачам швидко та ефективно зв’язуватися з адміністраторами веб-додатку.
            </p>
          </div>
          <img src={back} alt="back" style={{ width: '350px', height: '300px' }}/>
        </div>
    </div> 
    </main>
  )
}

export default AboutUsPage;