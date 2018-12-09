# ReactEPAM
React EPAM Course

Chapter 3: Understanding the Base Features & Syntax
The Build Workflow
  Mit fogunk használni
    npm, ES6+, Webpack bundler, Babel Compiler, Dev Server

Using Create React App
  A githubon megvan hogyan kell telepíteni
  A végén npm start paranccsal indul a dev Server

Understanding the Folder Structure
  public folder ami az index.html-t tartalmazza
  meg a metadata.jsont amiben a meta elemeket configurálhatjuk
  az src mappa tartalmazza a scripteket
  Az App.js maga a react applikáció
  Az index.js ami az appot kirendereli a root divbe, ami az egyedüli az index.html-ben

Understanding Component Basics
  Kell legyen render metódusa, amiben megadhatjuk hogy milyen jsx-et rendereljen ki.

Understanding JSX
  React.createElement('div')
  Akár másik komponenst is ki tudunk renderelni ilyen módon, nem csak html elementeket
  A 2. paraméter a config object
  A további a nested rész. Azokat ugyanúgy kell React.createElement segítségével létrehozni
  De ez macerás. a jsx struktúra használata javallott. A két megoldás ugyanaz, hiszen a jsx a motorháztető alatt ilyen render cuccokkal működik

JSX Restrictions
  Minden komponensünket egy root elementbe pl egy divbe kell rakni.
  Nem lehet úgy megírni, hogy létrehozunk egy divet, aztán 1 szinten vele egy másikat is

Creating Functional Component
  Létre lehet hozni egy másik mappát, azon belül egy másik komponenst
  Az App.jsben be kell importálni, és utána lehet a render függvényben használni

Working with Components & Re-Using Them
  Többször, több helyre is be lehet rakni ezeket a komponenseket

Outputting Dynamic Content
  Ha 1 soros js kifejezéseket akarunk a kirendelendő "html"be rakni, akkor a kifejezést tegyük {}-be. {Math.random()}

Working with Props
  Tudunk attributumokat hozzáadni a meghíváshoz

Understanding the Children Property
  props.children propertyvel tudunk hivatkozni arra a tartalomra, ami a komponens nyitó és záró tagje között van. A children egy legoglalt szó, nem használhatjuk paraméter átadásra, csak ily módon.
  A return ( és ) között több sorban tudjuk szerkeszteni a functional komponensünk visszatérési értékét. Adhatunk hozzá más elementeket, stb.

Understanding and Using State
  classokban nem tudsz változókban tárolni dolgokat
  De a class propertijeiként lehet
  Van egy property, amit csak componentből származtatott classban lehet használni, functionalban nem pl. Ez a state
  Míg a többi property a classban kívülről van managelve, addig a state belülről
  Ez is foglalt szó. Lehet hozzárendelni egy objectet.
  Ha ez a state változik, amit ugyanúgy a renderen belül a this-el érünk el, mint bármilyen más objectet, akkor a react újrarendereli a domot, vagy updateli. De csak a state object esetében.

Handling events with Methods
  használhatjuk az onClick eventet, pl egy button tagen. Fontos hogy itt a js/html-el szemben nagy C-vel írjuk.
  onClick={this.valamiHandler} módon adhatjuk meg, hogy mit csináljon. Érdemes Handler végű megnevezéssel ellátott metódust létrehozni, és azt meghívni. Ez egy jó pattern.
  Fontos, hogy a függvénynél ne használjuk a végén a ()-et. Ha ezt tennénk, a react azonnal lefuttatná az eventet a betöltéskor.

Manipulating the state
  ha a meghívott handlerfunction array function, akkor a benne levő this.valami elérési mód működik. Ha a régi function (){...} megoldást használnánk, nem működne.
  a state not mutable directly. Nem lehet ilyen módon változtatni: this.state.valami = valami
  A változtatásához a this.setState metódust kell használjuk, ami a componentből származik. Nem kell nekünk definiálni.
  a setState egy objectet vár argomentumként
  Ebben módosíthatjuk a staten belüli propertit. Ha van a staten belül egy másik property is, amit nem változtatunk, akkor azt érintetlenül hagyja.
  Szóval nem kell az state egész tartalámát bemásolni a módosításhoz, csak azt amin ténylegesen módosítani szereznénk. Nem fogja felülcsapni a nem érintett részeket.
  Gyakorlatilag megnézi a jelenleg létező domot, összehasonlítja azzal, amit módosítani szeretnénk, és updateli a dom azon részét, ami változott. Nem az egész domot rendereli újra.
  A functional component propsjait is módosítja a state változás, ha azon keresztül renderelődik ki a változás

Functional (stateless) vs class (stateful) Components
  A functional componentek nem manipulálják az applikáció állapotát
  Azok csak kirenderelésre valók. Dinamikusan igaz, de nem több.
  Csak néhány komponens állítgat statet az applikációkban.
  Ezekre containerekként utalunk. Mint az App.js pl. Azért container, mert ez tartalmazza az applikáció egyes részeinek statejeit

Passing Method References between Components
  A functionok referenciáját ugyanúgy át lehet adni propertyként a componensnek, mint ahogy a nevet, évet, vagy mást
  A lényeg, hogy átadhatunk metódusokat propertikként, ami király, és egy jó pattern, nem valami hack
  valuet a metódushoz úgy tudunk átadni, hogy hozzá bindoljuk a referencia átadásnál.
  <button onClick={this.valamiHandler.bind(this, 'valami value')}></button>
  A másik mód egy arrow anonimus function alkalmazása
  <button onClick={() => this.valamiHandler('valami value')}></button>
  Itt így már nem fog automatikusan lefutni a valamiHandler, csak a klikkre
  Azonban az arrow functionos megoldás kevésbé hatékony performancia szempontjából. Így, ha egy nagyobb alkalmazást építünk, vagy kell mindenképpen a nagyobb performancia, akkor a bindos megoldást használjuk!!!

Adding two way binding
  input mezőnél használhatjuk az onChange eventet, mint ahogy az onClicket
  Érdemes egy másik handlert használni, aminek a default event objectet adjuk át propertiként: masikHandler(event)
  Így elérjük az input mezőbe beírt értéket az event.target.value segítségével
  A terget az adott input mezőre vonatkzik. A többi input mezőbe írást nem veszi figyelembe, csak ha ott is meg van hívva
  az input value értékének is meg lehet adni a props.name-t, vagy amit akarunk. De ha nem állítjuk be az onChanget, akkor azt a valuet nem tudjuk módosítani. 

Adding Styling with Stylesheets
  Komponensenként lehet külön csseket is létrehozni.
  De alapból ezek a css szabályok globalak.
  Érdemes a class namel megegyező nagy kezdőbetűs css rulet létrehozni, hogy ne keveredjen.
  .Person {} pl Nyilván az új css fájlunkat is be kell importálni
  Ámbátor ezt az importot lehet a Person.jsbe is rakni

Working with inline Styling
  Inline stylingot létre lehet hozni úgy, hogy készítünk egy object változót. pl const style = {} a render functionon belülre
  Ebben meg tudjuk adni a css szabályokat proprtykként camelcase megnevezéssel, mert a kötőjelet nem tudja értelmezni a js object ily módon.
  Ha mégis kötőjellel szeretnénk használni, akkor idézőjelek közé kell rakni. De a camelcase a preferáltabb. pl: backgroundColor: "white"
  Fontos, hogy a valuek stringek legyenek, lévén ez egy js object
  a html elementnek, amire alkalmazni szeretnénk a szabályt a style propertijének meg tudjuk adni a változónevetm ai tartalmazza a css szabályokat. Pl: <button style={style} />
  A hover és egyéb szabályokat elég nehéz alkalmazni inline stylingban. Erre van a css :)
  Az inline előnye, hogy csak abban a scopeban él, ahol létre van hozva a változó. De ugye nem a css teljes erejével rendelkezik. Még componenten belül sem alkalmazódik minden elemre, csak ahol használjuk.

RENDERING LISTS & CONDITIONAL Content
Rendering Content Conditionally
  Az a nagyon király a reactben, hogy jsel dolgozunk. Úgy néz ki mint a html, de igazából js.
  Szóval nem kell szenvedni az ng-if jellegű dolgoknál, mint ahogy az Angularban volt. Vagy más frameworköknél
  Ha a kirenderelendő komponenseket listaként ki szeretnénk renderelni vagy condotiont akarunk használni hozzájuk, akkor tegyük őket egy containerbe pl egy divbe
  Majd ezt a konténert is wrappeljük be {}-be. De ebben sem lehet ifet, és egyéb blokk statementeket használni, csak singleöket.
  Ellenben éppen ezért turnarit lehet használni. ? :

Handling Dynamic Contect "The JavaScript Way"
  Egész jsx kódrészleteket lehet hozzárendelni változókhoz
  let person = (<div>Valami</div>);
  A komponens render metódusába nyugodtan rakodhatunk ilyen olyan feltételeket, mint normal js-ben. Aztán a returnben csak bepakoljuk a használt változókat, amik a returnon kívüli feltételek után megmaradtak.
  A state changek pedig triggerelik az updatet, és lefut az egész render metódus megint.
  Érdemes is a return részt tisztán tartania amennyire lehetséges

Outputting Lists
  Szeretnénk a js objecteket amik arrayben vannak a stateben át mappelni jsx-é.
  Ezt a vanilla js-ben biztosított .map() metódussal tudjuk megtenni.
  {this.state.persons.map((person, index) => (
    return <Person
              click={() => this.deletePersonHandler(index)}
              name={person.name}
              age={person.age} />
    //valid jsx-el kell visszatérni, mert azt fogja kirenderelni a domba
  ))}

Lists & States
  deletePersonHandler = (personIndex) => {
    const persons = this.state.persons;
    persons.splice(personIndex, 1);
    this.setState({persons: persons})
  }

Updating state immutably
  JS-ben az objected és a tömbök referencia típusúak. Szóval amikor a korábban látható módon átadtuk a this.state.persons egy persons változóba, akkor igazából csak egy pointert adtunk át, ami az eredeti objectre mutat, statere
  Ez egy bad practice. A jó megközelítés, ha egy copyt kapunk az eredeti tömbről.
  Ezt pl a slice metódussal tudjuk elérni.
  const persons = this.state.persons.slice();
  A másik lehetőség az ES6os spread operator használata.
  const persons = [...this.state.persons];

Lists & Keys
  A key prop egy fontos property amit meg kell adni, amikor adatokat listában renderelünk.
  A key egy default property amit a React vár, hogy adjuk meg akkor is ha egy alap html element, meg akkor is, ha egy custom component
  Ez a key property segít hatékonyan updatelni a listánkat.
  Enélkül mindig az egész listát újrarendereli egy törlésnél, mivel nem tudja pontosan melyik listaelemet töröltük. Egy nagy listánál ez nem hatékony.
  A key segít azonosítani mi változott, mi nem, és így csak azt updateli ami változott.
  a key prophoz valami egyedit kell hozzá assignolni. id vagy egyéb cucc, ami egyedi azonosító. A dbből is jöhet ugyebár. :)
  Egy listában az index is ilyen egyedi dolog, de ha változik a sorren, pl kitöröljük az első elemet, akkor a többinek mind változik az indexe, szóval ott vagyunk ahol a part szakad.
  Ha nincs id, akkor csináljunk egy dummy id-t, amit hozzáadunk a tömbben található objecteinkhez
  state = {
    persons: [
      {id: 'ujhgiudhigh', name: 'Timi', age: 28},
    ]
  }
  age={person.age}
  key={person.id}

Flexible Lists
  A további handlerekhez is fel kell használni az egyedi azonosítót, hogy működhössön.
  age={person.age}
  key={person.id}
  changed={(event) => this.nameChangedHandler(event, person.id)}

  A nameChangedHandlerben ezt az egyedi persont le kell kezelni
  nameChangedHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex(p => {
      return p.id === id;
    });
    a findIndex egy JS által biztosított keresőmetódus. Ez nem tér vissza egy új arrayel, hanem jelen esetben egy booleannal. Igaz hogy a paraméterben megadott id megegyszezik a stateben ismert idval?
    const person = {
      ...this.state.persons[personIndex]
    }
    Ha igen, akkor hozzárendeljük egy változóhoz. Mivel az object is referenciatípusú, ezért itt is érdemes egy új objectet létrehozni a referenciából a spread operator segítségével.
    A másik megközelítés, az Object.assign használata, ami vanilla JS, nem ES6
    const person = Object.assign({}, this.state.persons[personIndex]);
    Ez üres új objecthez hozzárendeli a stateset, és ezt az új objectet adja át a változónak. Így már nem egy referencia lesz a statesre. De az újabbat királyabb használni.
    Ez után a person.name = event.target.value értékadás már nem az eredetit mókolja, hanem a firr ropogós újat.
    const persons = [...this.state.persons];
    persons[personIndex] = person;

    Ezek után már tudjuk a this.setState({persons: persons}) al a régi tömb másolatával amit updateltünk updatelni a statet
    Így a leghatékonyabban, a legflexibilisebben tudjuk immutable módon a listákat kirenderelni
  }


STYLING REACT Components
Setting Styles dynamically
  a render metóduson belüli változóban elmentett stylet lehet ugyanúgy módosítgatni feltételhez kötötten. Lévén ez egy object:) A state függvényében más és más style fog megjelenni.
  Ugyanúgy lehet stylet dinamikusan változtatni, ahogy egy változót, vagy megjelenő komponenst, stbt. Minden JS :D

Setting Class Names Dynamically
  const classes = ['red', 'bold'].join(' ')
  Ezeket a classneveket létre lehet hozni a cssben
  Ugyanolyan state figyelő feltételekkel lehet módosítgatni.
  A joint akkor is tudjuk alkalmazni, amikor egy elemhez hozzárakjuk. className={classes.join(' ')}

Adding and Using Radium
  Bár a hover-t és egyéb pseudo elemeket lehet használni a cssben, de az mindenhol igaz lesz, amire teljeseül. Nyilván lehet egyedi css azonosítókkal dolgozni.
  De az inline styleingnak megvan az a nagy előnye, hogy mivel minden JS, ezért a statek figyelésével lehet módosítgatni a stylet. Viszont a pseudo elemeket nem tudjuk használni inline stylinggal alapból.
  Egy népszerű 3rd party packageel viszont ez orvosolható.
  View/Integrated Terminal :D:D VSCode
  importálni kell a radiumot a fájlba, ahol használni akarjuk. import Radium from 'radium'
  Aztán ki kell exportálni export default Radium(App);
  A Radiumot a functional componentecben is lehet használni.
  Ezek után már meg tudunk pseudo elemeket adni style propertykként. A kikötés, hogy stringben legyene, mivel :-al nem kezdődhet valid js property.
  backgroundColor: red,
  ':hover': {
    backgroundColor: 'black'
  }
  Ahol pedig használjuk, átírjuk ugyanúgy a JS syntaxot kell követni.
  style.backgroundColor = 'salmon';
  style[':hover']: {
    color: 'white'
  }

Using Radium for Media Queries
  Az inline styleban a Radiummal megadhatunk media queryket
  '@media (min-width: 500px)': {
    width: '450px'
  }
  Inline styllal felül tudjuk csapni a css szabályokat, ha a className után hívjuk a stylet
  De ahhoz, hogy transform css szabályok is működjenek, mint pl a keyframek az animációnál, vagy a media queryk kell egy másik komponenst használni, amit szintén a Radium biztosít.
  Ez a {StyleRoot}, amit szintén a 'radium'ból importalunk a Radiumot követően. Olyan, mint a React, {Component} combó. A {} exportok named exportok, míg a Radium, React és társai defaultok.
  Ha használunk mediaqueryket pl egy divben, akkor az egész divet bele kell wrappelni egy <StyleRoot></StyleRoot> komponensbe.

Enabling and Using CSS Modules
  Ahhoz, hogy egy adott komponenshez írt Css fájlunk csak az adott komponensünk scopjában működjön, és ne csapjon felül semmit máshol a CSS modulokat kell használnunk.
  Az aktiválásához használnunk kell az eject scriptet, amit a create-react-app biztosít számunkra. Ezzel tudjuk a konfigurációt módosítani.
  De nagyon fontos, hogy módosítás előtt minden módosított fájlunkat addoljunk éls komittoljunk, mert különben nem fog műkö<dni class=""></dni>
  npm run eject, és máris láthatóvá válnak azokat a packegetk, és configok, amik amúgy under the hodd mennek.
  Pl ilyen a webpack.config.dev és prod fájlok. Ebben kell módosításokat eszközölni a css modul aktiváláshoz.
  Annál a résznél ahol a test: /\.css$/ van a css-loader optionjei közé fel kell venni a modules: true propertyt.
  Ezen kívül az egyedi azonosítókhoz fel kell venni ezt: localIdentName: '[name]__[local]__[hash:base64:5]'
  Ezeket a beállításokat mindkét config fájlban meg kell adni
  Ezek után a css beállítások, amiket egy sdott css fájlban létrehoztunk csak abban a fájlban, és scopeban fognak működni, ahol beimportáltuk őket
  Ezen kívül az importál a css-t hozzárendelhetjük egy random nevű objecthez, pl classes vagy styles import classes from './App.css'
  Ezek után amikor használnánk, már nem a class nevet adjuk meg a className résznél, hanem ennek az új objectnek a propertyjét. pl: className={classes.az App.cssben megadott valamelyik classname}
  A valóságban az történik, hogy a css-loader létrehoz egy egyedi hash azonosítót, amit az adott css classokhoz hozzárendel így téve egyedivé azokat.
  A domban ha megnézzük a devtoollal a classoknak egyedi nevük lesz, amik automatán generálódnak PL: App__App__1o-Fp
  Még egy fontos dolog, hogy a config fájlokt módosításai után a dev servert újra kell indítani, hogy a változás látható legyen.

Adding Pseudo Selectors
  Az inline css helyett a pseudo selectorokat a css fájlokban használjuk. Mint egy normal csst. PL:
  .App button.Red:hover{
    valami
  }
  A js fájlban használhatunk a states feltételek kezelése céljából egy btnClass változót, vagy akárminek nevezhetjük.
  Ehhez pedig mint ahogy az inline stylenál tettük hozzárendelhetünk css szabályokat. btnClass = classes.Red
  Aztán a classNamenek az elemnél ezt a btnClasst adjuk meg.

Working with Media Queries
  Ezeket ugyanúgy használjuk mintha cssben lennének. Fontos, hogy meg legyen adva a class, amin akarjuk a változtatásokat alkalmazni.
  '@media (min-width: 500px)': {
    .Person {
      width: '450px'
    }
  }


DEBUGGING REACT APPS
Understanding Error Messages
Finding Logical Errors by using Dev Tools & Sourcemaps
  source tab in devtool

Working with the React Developer Tools
  Ez egy chrome extension, amit telepítenünk kell
  Egy Chrome újraindítás után lesz egy React tab elérhető a devtoolban
  Itt látjuk a domban a komponenseinket, és a stateeket:)

Using Error Boundaries (React 16+)
  React 16tól kezdve tudunk használni egy ErrorBoundary nevű komponenst amivel hibákat tudunk lekezelni.
  Ugyanúgy kell a statet használni, pl egy hasError propertyvel.
  És ha az igaz, akkor a renderben kirendereljük az error messaget, amit kapunk a Reacttól. valamiCatchMethod = (error, info) => {this.setState({hasError: true, errorMessage: error})}
  Ha pedig nincs error, akkor a renderben a this.props.childrennel térünk vissza.
  Ahol pedig használni szeretnénk, pl az App.jsben a Person component bele kell wrappelni egy <ErrorBoundary><Person /></ErrorBoundary> komponentbe
  Ennek az új cuccnak a feladata, hogy minden benne lévő komponentben felmerülő hibát szépen elkapjon és lekezelje. Ha nincs hiba a children renderelődik ki, vagyis a benne található komponens
  Amire még figyelni kell, hogy a key propertyt bele kell rakni az ErrorBoundaryba a Personból pl, szüval a külső wrapper komponensbe, mivel a map metódus mindig a külsőben keresné.
  A replikálandó elemek mindegyikét az ErrorBoundaryval együtt szeretnénk renderelni.
  Persze ez nem azt jelenti, hogy az egész appot tele szeretnénk rakni ErrorBoundarykel. Csak ott használjuk ahol van értelme.
  Ahol pl nem vagyunk biztosak benne, hogy nem lesz hiba, vagy van jelentősége egy hibaüzenetnek, amit ki szeretnénk renderelni a képernyőre.
  Pl server lehalás productionben, stb, amit nem tudunk rendesen iránnyítani.
  Ami nagyon jó, hogy így maga a React Appunk nem hal le, csak a hibás komponens helyén találunk egy custom általunk managelt hibaüzit.
  error generátor: if(Math.random() > 0.7){ throw newError('HIBAAAA') }


COMPONENT DEEP DIVE - Beyond the Basics
A better Project Structure
  Ha lehetséges a state állítgatás ne legyen túl sok ui renderinggel összerakva 1 komponensbe. A render metódusnak nem jó, ha túl sok jsx-et tartalmaz. kicsit átláthatatlanná teszi.
  Érdemes a fájlstruktúrát is rendezettebbé tenni. Pl lehetne egy components mappa az src mappában. Azon belül egymásba ágyazva a componensek. pl Persons folder benne a Persons.js, ami egy personokat tartalmazó komponens.
  Ebbe menne a Person folder a hozzá tartozó js és css fájlokkal. Ezek már csak az egyes personokat jelenítik meg.
  Lehet assets folder ami a képeket más fájlokat tartalmaz.
  Aztán lehet containers mappa, amiben a containereink vannak, mint pl az App.js és társai, test fájljai.
  A végén csak az index.js és css marad a gyökérben srcben

Splitting an App into components
  Ha nem kell state, akkor lehet functional component
  Ha csupán 1 soros visszatérésünk van, akkor elhagyhatjuk a return statementet az arrow functionben. Ezek a példák mind validak.
  const persons = props => (      |  const persons = props => props.persons.map((d,i) => {
    //ide jön a jsx               |   Valami
  );                              |  });
  Az a léyneg, hogy akár sok kicsi de egy adott feladatra fókuszálü komponensünk legyen
  Wrappelés nélkül nem rakhatunk egymés mellé elemeket. Vagyis egy functional componentben sem tehetjük meg azt, hogy csak egy h1 meg egy p van egymás mellett. Ha mást nem egy divbe bele kell rakni őket.
  A container fájlok lényege, hogy manageljék és manipulálják a stateket. Minden másra használjunk kisebb szeparált komponenseket.
  Clearly focused components we have

Comparing Stateless and Stateful Components
  Sokkal könnyebb kezelni egy nagyobb appot, ha csupán néhány helyen lehet statet állítani. A többi esetben a funkcionális komponensek amik egy adott feladatra valók, pl egy renderelésre látják el a dolgokat.
  Így mindig tudni fogjuk, hogy egy bizonyos elem hol renderelődik ki és hol állítódik a stateje.
  Stateful (Containers) Components: class XY extends Component -> Can access to State, Can implement Lifecycle hooks. Access State and Props via 'this' -> this.state.XY & this.props.XY. USE ONLY IF YOU NEED TO MANAGE STATE OR ACCESS TO LIFECYCLE HOOKS!
  Stateless components: const XY = (props) => {...}: CANNOT Access to State, CANNOT implement Lifecycle hooks. Access Props via 'props' -> props.XY. USE IN ALL OTHER CASES EXCEPT ABOVE ^
  Tudunk propertyket átadni stateful komponensekben is. -> ReactDOM.render(<App title='Relevant Persons' />, document.getElementById('root'));
  Bár propsként nem tudjuk elérni ezt a propertyt, hiszen a render metódusban nincs ilyen átadva, és definiálva sincs, de mivel a componetsből származtatjuk az osztályunkat, ezért a classnak van alapból propsa, mint ahogy setState metódusa is. Nem kell definiálnunk.
  Így oly módon tudjuk elérni ezt az átadott property, hogy: valami={this.props.title}. Ilyen módon tovább is tudjuk adni egy functional komponent propertyjei közé. Abban a functional komponentben pedig mint props.valami-ként érjük majd el.

Component Lifecycle
  Kizárólag stateful komponensekben működnek.
  Vannak metódusok, amik lefutnak egy komponens élete folyamán. Például a komponens létrehozásakor lefut a constructor(), a componentWillMount(), a componentDidMount() és a render().
  A constructor egy alap ES6 class feature, nem Reactos. Azonban a React nyomja át a propsokat ezen a constructor metóduson. Ha implementáljuk a constructor() metódus, amit eddig nem tettünk, akkor mindig meg kell hívnunk a super(props) metódusát.
  A constructorban be tudjuk állítani pl a statet. Amit soha ne csináljunk a constructorban hogy side-effecteket okozunk. Pl kihívunk egy külső webserverre. egy kérés és válasz, ami a statet állítja. Ilyet ne tegyünk itt.
  Ez a statet megjósolhatatlanná teszi, és újrarenderelést okoz az egész componensben, ami meg a teljesítményt rontja.
  A constructor() után a componentWillMount() fog lefutni, amit a React hoz magával. Ez már csak történelmi okok miatt van, nem valószínű, hogy fogjuk használni. Ebben lehet statet updatelni, last-minute Optimiziation-t tenni. Itt sem szabad side-effectet okozni, mint az előbbinél.
  Ezután jön a render() metódus. Ez egy koncepciót mutat, hogy hogyan nézne ki az app, ha a benne foglaltakkal updatelődne a DOM from HTML perspective. De itt még nem updatelődik. Előkészíti és strukturálja a JSX kódot.
  Itt dől el, hogy milyen tartalom fog valójában kirenderelődni. Megtörténik a vizsgálat és összehasonlítás a valódi DOM jelenlegi állapotával. Az is lehet, hogy semmi nem renderelődik újra, mert már most is úgy néz ki.
  Ezután a Child componentek renderelése történik meg.
  Ezután pedig a componentDidMount() következik. Ez azt mutatja meg, hogy sikeresen mountolódott e ez a komponens. Ha sikeres volt, akkor okozhatunk side-effecteket. Itt szabad elérni a webet, hogy fetcheljünk le valami adatot.
  Viszont itt már nem szabad a statet updatelni, mert ez újrarenderelés triggerelne.

Converting Stateless to Stateful Components
  Annyi az egész, hogy class extend módra kell a létrehozást átírni. a kezdőbetűit nagyra cserélni az export résznél is. A propsokat pedig this.propsra kell cserélni. Illetve ha a Componentből származunk, akkor azt is meg kell hívni az importnál.
  Valamint a funckionalitás bele kell rakni a render() metódusba. Ott pedig vissza kell térnünk a return segítségével.

Component Creation Lifecycle in Action
  Ha ebben a stateful componentsben létrehozzuk a constructor(props) metódust itt úgy is el tudjuk érni a propertyket hogy props.valami Azonban kizárólag itt.
  Illetve a constructor metódusban létre kell hozni egy super(props)-ot is. Ha ezt nem tesszük meg hibát fog dobni, és nem fut le az app.
  Ha nem használjuk a constructor() metódust, akkor a React automatikusan használja a super() metódust, hogy elérje a parentet.
  A constructorban is le lehet implementálni a statet. this.state = {...} módon. Figyelni kell arra, hogy a super(props) után legyen ez. De gyakoribb, és jobban átlátható a constructoron kívüli korábbi state létrehozás. Simán state = {...} a constructoron kívül.
  Korábbi react vervióknál csak a constructoros megoldás működött a state esetében, de ma már ez is egyszerűsödött.
  A render metódus minden stateful componens kötelező eleme.
  Ezek a lifecycle metódusok csak akkor futnak le, ha azt a metódust használjuk. pl a Persosn komponens az App betöltődéskor nem fut le, csak conditionally ha a gombra kattintunk és kilistázzuk a personoket.
  A sorrend a kattintásnál úgy módosult, hogy az App.js render függénye lefutott újra, mivel a state változott. Utána a Persons komponens lifecycle metódusai következnek.
  A Persons komponens render metódusa után pedig a Person kompnens lifecycle függvényei következnek, és csak utána jön a Persons componentDidMount, ami azt hivatott nézni, hogy a Person Child komponensek is rendben megvannak e.
  Sőt a Person komponensek render függvénye után is a következő egy szinten lévő Person komponens következik renderig és így tovább. Utána annyi Person komponenses componentDidMount amennyi Person renderelődött, és utána a Persons componentDidMountja

Component Updating Lifecycle hooks - triggered by Parent - props changed //internal triggered update is when the state changes
  Ekkor a componentWillReceiveProps(nextProps //ez az argomentum) fut le. Nem szabad Side-Effectezni. Ellenben itt syncelődik össze a state az új propsokkal.
  Ha nem kell ily módon szinkronizálnunk, akkor nem kell ezt a metódust sem, mint ahogy a többi nem használtat sem leimplementálni az appba.
  Ezután fut le a shouldComponentUpdate(nextProps, nextState). Ez a metódus tudja cancelelni az egész updating processt. Mi tudjuk eldönteni, hogy kell e az update vagy nem kell. Ha ez a függvény igazzal tér vissza, az update folytatódik, ha falseal, akkor nem.
  Ha ezt a függvényt nem jól használjuk, akkor az nem helyes statet és rossz DOM struktúrát eredményezhet.
  Azonban ez egy hasznos függvény, mert ha ténylegesen nem kell updatelni semmit, falseal térünk vissza, akkor nem megy végig az egész fastruktúrán, ami alatta van, és sokat tud javítani a teljesítményen.
  Itt sem szabad side-effectet okozni. (adatlekérés webről, stb.)
  Ha továbbengedjük a componentWillUpdate(nextProps, nextState) következik. Itt hajtjuk végre a state syncet a propertikkel. Emelett semmi szín alatt sincs side-effectezés:)
  Érdemes is itt syncelni nem korábban, mert itt már tudjuk, hogy biztosan lesz update.
  Ezután a render() következik. Ugyanolyan módon működik, mint a creationnél. Prepare & Structure your JSX code.
  Ezután Updatelődnek a Child Component Propsok. Ezek triggerelnehtnek updateket a Child componensekben.
  Végül pedig a componentDidUpdate() fut le. Ugyanúgy müxik, mint a didmountos. Itt okozhatunk Side-Effecteket, és itt már nem updatelünk statet, hogy ne triggereljünk egy re-rendert.

Component Updating Lifecycle in Action
  A shouldComponentUpdate függvényben megadhatunk feltételt, ami alapján false vagy trueval térünk vissza. Így bizonyos esetekben preformancot takarítunk meg.

Updating Lifecycle Hooks - Triggered by State changes (Internal Change)
  Itt annyiban különbözik az előzőtől, hogy a shouldComponentUpdate(nextProps, nextState)-el kezdődik a dolog.
  State change esetében az adott component update lifecycleje fut le először.

Performance Gains with PureComponents
  Ha pl van egy gombunk, ami azt csinálja, hogy megmutatja a Persons listet, és az kirenderelődik, majd megint megnyomjuk a gombot, akkor megint végigfut a teljes component lifecycleön és újra kirendereli az egészet pontosan úgy ahogy kinézett eleve.
  Látszólag semmi nem változott, mégis mindegyik ponton újra végig futott. Azonban a chrome devtool more tools rendering paint flashing bekapcsolásával látjuk, hogy a valós domot nem bántotta. Csak a gomb animálása változott.
  Csak akkor nyúl a valós domhoz, ha különbséget tapasztal a render metódus futtatása során. De ehhez ugye le kell futtatnia render metódust. Ez nem igazán effective.
  Ha a shouldComponentUpdateben megvizsgáljuk, hogy a propertyk változtak e, akármelyik, akkor ha semmi nem változott, falseal tér vissza, és a renderek, nem futnak le.
  ilyenek pl: return nextState.showPersons !== this.state.showPersons vagy nextProps.persons !== this.props.persons
  Elérhetjük azt, hogy egy update eventnél csak a shouldComponentUpdateig fut a cucc
  A jó hír, hogy ezt a shouldComponentUpdateben nem kell nekünk leimplementálni ha így szeretnénk használni az appunkat. Az egyszerűbb mód, ha egy másik komponensből a PureComponentből származtatjuk az osztályunkat.
  Ez alapból azt csinálja hogy csak akkor updatel, ha van változás. Viszont ha a Purecomponentből származunk, akkor a shouldComponentUpdate már nem lehet benne, mert ezt a részt a PureComponent csinálja.
  Ez persze nem azt jelenti, hogy mindenhol a PureComponentset kell használni. Ott használjuk csak, ahol tudjuk, hogy elképzelhető, hogy nem lesz szükség updatere.
  Illetve ugye ennek a beépített összehasonlításnak is van bizonyos performancia felhasználása, szóval nem biztos, hogy ez alapján is megéri  mindenhol használni. Főként hogy ugye ha egy parentebb komponens PureComponent akkor a child componentek nem is feltétlen updatelődnek. 
  De ha egy childabb komponentig eljut, akkor annak nagy valószínűséggel biztosan updatelpdnie kell, és ha azok is PureComponentek, akkor ott fölöslegesen vizsgáljuk, hiszen biztosan updatelődik. Így tud visszaütni ha mindenhol használjuk, és uyanúgy performance issue lehet belőle.
  You really hurt your application. Stratégiailag fontos helyekre tegyük ezeket a Pure komponenteket. Ezért is fontos az applikáció tervezés.

How React Updates the App & Component Tree
  Components & Child Components update when State or Props change. Always from to parent to children levels. A containereknél érdemes vizsgálni, hogy a childrenek propsaiban van e változás. Ha nincs, akkor nem megyünk el a gyerekekig.
  Ha viszont biztos vagy benne, hogy a statekben is lesz változás a kontainerben, akkor ott sem érdemes használni a PureComponentet.

Understanding React's DOM Updating Strategy
  A render() függvény lefutása nem jelenti azt, hogy a real DOM automatikusan változik. A név megtévesztő lehet. A render() egy javaslat, hogyan nézne ki a html a végén. Ezért is van értelme a shouldComponentUpdatenek, mert ez a "javaslat" nem változna.
  It compares the Old Virtual DOM with the Re-rendered "future" Virtual DOM. React does it faster than the "real" DOM. Virtual DOM is a DOM representation in JavaScript. Minden html elementet és egyebet lehet representálni Javascriptben mielőtt a browserben a DOMot változtatnánk.
  Ha talál a comparison különbséget, akkor updateli a real DOMot. És ekkor sem az egész DOM-ot rendereli újra, csak azokat a bizonyos elemeket, ahol változást észlelt.
  Ha pl egy gomb szövege változik, akkor nem rendereli újra még magát a gombot sem az igaz DOMban, hanem csak a textet cseréli ki. Ha nincs különbség, nem nyúl az igazi DOMhoz.
  A real DOM elérése és módosítása lassú folyamat, ezért jó, hogy a React csak ott és csak akkor nyúl hozzá, ha tényleg kell.

Returning Adjacent Elements (React 16+)
  alapból a render() return részében mindig kell lennie egy container elemnek, pl egy divnek, és minden abba megy bele. Nem lehet szomszédos elemek gyökér szinten.
  Viszont tömbbel amik elemeket tartalmaznak vissza lehet térni. Akár úgy hogy map-el generálunk, akár kézzel összerakunk egyet a returnben return [elem1, elem2, ...] Ami lényeges, hogy mindegyik elemnek kell legyen egy key propertyje.
  Ltre tudunk hozni hoc-okat. Higher Order Component. Ezeknek a lényege, és célja, hogy wrappeljék a különböző tartalmakat, amik egy másik componens returnjében egymás mellett lennének. 
  const aux = props => props.children Ennyit csinál. Utána <Aux> 1 szinten lévő tartalom </Aux> módon tudjuk használni wrapperként. Ha nem használunk JSXet, akkor igazából nem is kell importálni a Reactot.

Understanding Higher Order Components (HOCs)
  Azért ez a neve, mert arra való, hogy wrappeljen egy másik komponenst. Arra is jó, hogy egy adott logikát több benne foglalt componensbe bele rakhasson. Ne kelljen azok mindegyikébe külön külön beépíteni.
  Ezt kétféleképpen is meg tudjuk tenni. az egyik, hogy létrehozunk egy functin komponenst, amiben visszatérünk így: <div className={props.classes}>{props.children}</div> A props.children az ami a tagek között van a child komponensben. Az egész tartalom.

A different Approach to HOCs
  kics kezdőbetűvel is tudunk elnevezni komponenst. Eddig az összeset nagy kezdőbetűvel neveztük el. Persons,js, App.js, Aux.js...
  Szóval a kisbetűs változata a hocnak így néz ki:
  const withClass = (WrappedComponent, className vagy valami) => {
    return (props) => {
      <div className={className vagy valami}>
        <WrappedComponent />
      </div>
    }
  }
  Ez nem egy functional komponent így, hanem egy egyszerű js function ami egy functioanl componenttel tér vissza.
  Itt viszont nem úgy wrappelsz, mint az <Aux>...</Aux> esetében.
  Itt így wrappelsz: export default withClass(App, classes.App) vagy classes.Persons;
  Amit sose szabad csinálni, hogy a <WrappedComponent />-et módosítjuk. Vagy a statejét. Ezt csak így magában kell használni.

Passing Unkonown Props
  Ami gond lehet ebben az esetben, hogy a WrappedComponent lehet a példa esetében App component vagy Persons component.
  Idézzük emlékezetünkbe, hogy a props csak egy object. Egy key value pár.
  Ahhoz, hogy mindig a jó propsokat kapja meg a WrappedComponent nem szabad semmit sem bele hardkódolni. Ellenben használhatjuk az ES6os spread operatort. <WrappedComponent {...props} />
  Ily módon szétsplitteljük ezeket a key-value párokat, amiket a propsban kapunk, és át passzoljuk a WrappedComponentnek.
  Ez annyit tesz WrappedComponentül, hogy fogd meg a propsot úgy ahogy van, ne csinálj vele semmit, csak add tovább.
  Ez működik stateful componenssel is.
  const withClass = (WrappedComponent, className) => {
    return class extends Component {
      render() {
        return (
          <div className={className}>
            <WrappedComponent {...this.props} />
          </div>
        )
      }
    }
  }
  Ez egy anonimus class amivel visszatérünk. Egész pontosan egy egy class factory. Van egy függvényünk ami visszatér egy classal on demand.

Using setState correctly
  A setStaten belül this.state.valamire hivatkozni nem jó. Azért nem, mert a statek állítgatása asyncronosan működik.
  Ez azt jelenti, hogy mire mondjuk egy countert a this.state.toggleClicked + 1-el növelnénk, addigra a this.state.toggleClicked már nem a  számunkra elvárt értéket mutathatja.
  A helyes megközelítés: this.setState((prevState, props) => {
    return {
      toggleClicked: prevState.toggleClicked + 1
    }
  });
  Ez azért fontos, hogy így legyen, mert a prevState nem módosítható az app más részéről, mint ahogy a this.state esetében lett volna.
  A másik megoldás is működik az esetek nagy részében, de annak meg van a veszélye, hogy state mutatingnél egy máshol beállított state állapot belezavar.

Validating Props
  Ahhoz, hogy másik is biztonsággal használhassák az általunk megírt komponenseket, fontos a propsokat levalidálni. Ha stringet várung azt fogadja el, ha nubert, azt, és így tovább.
  Ehhez van egy React Team által megírt npm package. a prop-types.
  Így használjuk: Az export előtt pl mindenen kívül:
  Person.propTypes = {
    click: PropTypes.func,
    name: PropTypes.string,
    age: PropTypes.number,
    changed: PropTypes.func
  }
  Ha rossz typust adunk meg, akkor warning errort fogunk kapni. A consolban is látszani fog.

Using References ('ref')
  Ahhoz, hogy tudjunk használni pl focust egy text inputon, van egy egyszerű lehetőségünk, ami nélkül körülményes lenne.
  Az inputban megadhatunk egy ref propertyt. Ez a key-hez hasonlóan egy foglalt property név, amit a React ismer.
  A references csak stateful componentsben elérhető, ahogy a PropTypes is.
  <input ref = {(inp) => {this.inputElement = inp}} type = ... />
  Ezt ha pl a render()-ben hozzuk létre, ahol valószínűsíthetően tesszük, akkor pl a componentDidMountban is elérhető, mivel az a render() után fut le.
  Ez a this.inputElement egy class property, amit így hozunk gyakorlatilag létre.
  A componentDidMountban aztán megoldhatjuk a focust. this.inputElement.focus()
  A focus fgv egy input elemekre rakható alap js függvény.
  Nem szabad lustának lenni és stylingot, egyéb hasonlókat a componentDidMountban létrehozni.
  Ezt a megoldást az ilyen egyedi esetekre használjuk kizárólag, mint a ref használata.
  Hogy meghatározhassuk pontosan melyik input elementet akarjuk focusba tenni, a komponensben át kell adni az indexet is. pl  position={index}
  Ezután pedig a componentDidMountban adhatunk egy feltételt, hogy ha a this.props.position === 0 akkor adja a focust az input elementhez.
  Ha ezt nem tennénk, értelemszerűen az utolsó lenne focusált.
      
More on the React ref API (16.3)
  Úgy is létre lehet hozni most már referenceket, hogy a constructorban ezt csináljuk: this.inputElement = React.createRef();
  Aztán ezt a referencet tudjuk használni az input elementnél pl: <input ref={this.inputElement} type=... />
  Ahol pedig eddig a focust használtuk a referencen kicsit módosítani kell: this.inputElement.current.focus();
  Alapból nem tudjuk a referenciákat átadni egyik componensből a másikba, ha HOC-et használunk, hoszen azt a függvényt, amit használni akarunk a referenciában nem a HOC anonymus classában hoztuk létre.
  Erre tlálták ki a forwardRef() metódust.
  Ezt úgy tudjuk használni, hogy az anonymus classt elmentjük egy változóba, és a HOC-en belül visszatérünk egy forwardReffel.
  return React.forwardRef((props, ref) => {
    return <WithClass /*Ez az exanonym func neve*/ {...props} forwardedRef={ref} />;
  });
  /// *** EZT MÉGEGYSZER MEG KELL NÉZNI, HOGY ÉRTSEM ***\\\
  /*** Meg kell nézni mit tud a static next Gen JS feature ***\

The Context API (React 16.3)
  Global state, ami elérhető mindenhol. Ez király.
  Alapból, ha szeretnénk egy statet elérni nagyon lent, akkor végig a parentjein át kell adogatni.
  Ez sok esetben jó, de vannak esetek, ahol global dolgok kellenek. pl az autentikáció, vagy valami globál téma, amit mindenhol használunk
  contextet létre tudunk hozni a React.createContext(false)-el. pl Ezzel létrehozunk egy classt.
  De ezt egy kicsit másképp használjuk.
  <AuthContext.Provider value={this.state.authenticated}>
    {persons}
  </AuthContext.Provider>
  Ez a Provider egy subkomponent, amit szintén a React generál. Így már nem kell végig mindegyik Parenten végigtolni és átadni a statet.
  Ahol szeretnénk ezt a global statet használni, importáljuk be a classt, amit ott a gyökér containerben létrehoztunk. 
  És itt alul már tudjuk is használni egy másik subcomponentjével.
  <AuthContext.Consumer>
    {auth => auth? <p>I'm authentiated</p> : null}
  </AuthContext.Consumer>
  Ez az auth az a boolean érték, amit átadunk a stateben. nem kell a this.state. megközelítést használni
  Ismét fontos kihangsúlyozni, hogy ezt csak ritkán, tényleg global cuccoknál használjuk csak. A propsban átadós megközelítés jobban átlátható, és használható.

More on the Context API (16.6)
  A contextel meg lehet azt is csinálni, hogy referenciaként elküldesz benne egy függvényt, ami így ezáltal mindenhol elérhetővé válik, és ez a függvény módosít egy másik szintén ebben a contextben átadott statet.
  16.6-tól kezdve meg lehet adni contextTypot, ami szintén elvileg egy lefoglalt kifejezés ???
  static contextType = AuthContext;
  A static egy JS Next Gen keyword.
  Ehhez a megközelítéshet stateful componens kell.
  Ezek után már nem kell az <AuthContext.Consumer>-t meg Providert használni. Elég csak  JSX-et.
  Viszont így a propsként elérhető függvények sem elérhetőek már, ehelyett hozzáférünk a this.context-hez, ami szintén React beépített.
  <button onClick={this.context.toggleAuth}> Ez a contextTypeban felállított context adatokon alapul.
  Ha készítünk egy másik contextet, akkor ugyanilyen módon tudjuk ugyanazzal a kontexttel használni.
  Viszont így a context generálást már egy külön fájlba kell rakni és akár anonim módon kiexportálni csak a létrehozást.
  export default React.createContext({
    isAuth: false,
    toggleAuth: () => {}
  });//ez mehet mondjuk egy auth-context.js állományba
  Aztán ezt kell beimportálgatni oda, ahol használni akarjuk
  Importoknál csak azt nem kell {}-be rakni, ami default exportos volt.

Updated Lifecycle Hooks (16.3)
  3 Lifecycle method deprecateddé vált a 16.3-tól, és újak vannak helyettük.
  Ezek: componentWillMount(), componentWillUpdate() és componentWillReceiveProps()
  Azért lettek deprecatedek, mert gyakran rosszul használták őket. Naaaagyon rossz dolgokat lehetett benne csinálni. State módosítások, stb.
  Lehet még használni őket ettől függetlenül, csak nem ajánlott :)
  Az egyik új ehelyett: static getDerivedStateDromProps(nextProps, prevState) {...}
  Akkopr fut le, ha a component updatelődik. Még a render() előtt. Szóval itt még lehet updatelni a statet ha akarjuk.
  A másik új: getSnapshotBeforeUpdate() {}
  Ez pedig a render() után fut le, még azelőtt, hogy a real DOM-ba mókoltunk volna.
  Szóval a componentDidMount() és a componentDidUpdate() előtt.
  Itt pl a scrollingpositiont lehet elmenteni. Ilyenekre jó.
  Aztán miután a real DOM updatelődött, a componentDidUpdate()-ben vissza lehet scrollolni a lementett pozihoz a felhasználót.

The "memo" Method (16.6)
  Hogyan re-rendereljük hatékonyan a komponenseinket?
  Eddig ilyenünk csak stateful componentek esetében volt a PureComponent használatával, és a shouldComponentUpdate LifeCycle Hook segítségével.
  De most már tudunk functional componenteket is optimalizálni. Ezt úgy tudjuk, ha a functional componentünket belewrappeljük az új Reactos memo metódusba.
  export default React.memo(cockpit); Talán kívülről nem látunk módosulást, de ezáltal a cockpit komponensünk csak akkor fog újrarenderelődni, ha a props, amit kap megváltozott.
  Az új props össze lesz hasonlítva a régi propsal ///***shallow level***\\\ szinten. Nincs deep level összehasonlítás
  Szóval nem fog újrarenderelődni csak azért mert pl az App.js amiben használjuk a Cockpitet újrarenderelődik. Csak akkor fog, ha a Cockpitnek kell renderelődnie.
  Alapvetően fel lehet hsználni minden functioanl component esetében ezt, de itt sem ésszerű. Főként, ha az adott functional component tutura mindig updatelődik, mert kell neki, akkor ez az optimalizálási med inkább redundáns lesz.




WEBPACK
Introducing Webpack
  It's a Bundler. With hooks, loaders and stuff more.
  It bundels the lots of js, css, jpgs and other types of files into one from their types.
  Analyzes Connections & Bundles between them, and optimizes everything.

How Webpack works
  Kell egy entry point, vagy több is lehet, ahonnan a webpack elkezdi begyűjteni a fájlok egymáshoz fűződő dependenciáit.
  Közben hozzáadja a loadereket, mint pl a babel-loader, css-loader, file-type dependent transormaciókat.
  A végén a pluginokat, global transformatorokat, mint pl az uglify.
  Ami pedig a végeredmény a dist mappában egy helyesen sorrendezett összekonkatenált bundle.js állomány 

Basic Workflow Requirements - Mik kellhetnek?
  Kell next-gen js támogató kompiler
  Kell JSX kezelése
  Kell CSS autoprefixing
  Kell Image import
  Kell kód optimizer






EPAM ANYAG
  Refet létrehozhatunk úgy is, hogy a classban egy propertyhez generálunk. this.textInput = React.createRef().

  React.Freagment-et is lehet használni arra, hogy más elemeket wrappeljünk vele egy komponensben.
  Ezáltal már teljesül, hogy nem szomszédos elemekkel tér vissza.
  Így is működik:
  <>                  <React.Fragment>
    <td>valami</td>     <td>valami</td>
    <td>valami</td>     <td>valami</td>
  </>                  </React.Fragment>

  Ha különböző componenseket akarunk egyben használn, használjunk Portalokat.
  //Modal
  render(){
    return ReactDOM.createPortal(
      this.props.children,
      this.el
    );
  }

  //App
  render(){
    return(
      <div>
        <p>Number of clicks: {this.state.clicks}</p>
        <Modal>
          <button onClick={this.hnadleClick}>Click</button>
        </Modal>
      </div>
    );
  }

  https://medium.com/@alexmngn/how-to-better-organize-your-react-applications-2fd3ea1920f1
  https://medium.com/@dan_abramov/smart-and-dumb-components-7ca2f9a7c7d0
    Divide components into 2 categories.
    presentational (Dumb) components - how things look
      Érdemes functional componentekbe rakni ezeket.
      pl oldal, sidebar, story, userinfo, list
    container (Smart) components - how things work
      provide data and behaviour to presentational or other container components
      Often stateful components
      pl. UserPage, FollowersSidebar, StoryContainer, FollowedUserList
    Benefits: More understandalbe
              Better usability - Ugyanazt a presentational componentet fel lehet használni tök más kontextusban tök más adatokkal
              A presentational componenseket be lehet rakni egymás alá egy adott oldalra, mint egy palettát, és lehet designerkedni velük úgy, hogy nem csesszük szét az alkalmazás logikát
              Használjuk minél többször a this.props.childrent


  https://medium.com/@thejasonfile/dumb-components-and-smart-components-e7b33a698d43
  https://medium.com/@pramonowang/advanced-react-component-patterns-dumb-component-and-smart-component-4cb50fa63aa9
  https://jaketrent.com/post/smart-dumb-components-react/
  https://github.com/nstudio/xplat/issues/2
  https://blog.bloomca.me/2017/10/08/difference-between-smart-and-dumb-components.html

  /*** Read React Advanced Guides Docs like https://reactjs.org/docs/portals.html ***\
