import {useState} from 'react';
import { Link } from 'react-router-dom';
import PixelSprite from './PixelSprite';
import Shelf from './Shelf';
import starStanding from '../assets/images/star_standing.svg';
import walkEx from '../assets/images/walkEx.svg';
import ratingGraph from '../assets/images/ratingGraph.png';
import styles from '../styles/Project.module.css';
 
export default function Bodies({project}) {
   const [isHovered, setIsHovered] = useState(false);
   switch (project) {
       case 'PageTurner':
           return (
               <div className={styles.element} style={{ gridColumn: '2 / span 8', gridRow: '5' }}>
                   <div className={styles.content}>
                       <PixelSprite
                           frames={[
                               "/books_big/book_01.png",
                               "/books_big/book_02.png",
                               "/books_big/book_03.png",
                               "/books_big/book_04.png",
                               "/books_big/book_05.png",
                               "/books_big/book_06.png",
                               "/books_big/book_07.png",
                               "/books_big/book_08.png",
                               "/books_big/book_09.png",
                               "/books_big/book_10.png",
                               "/books_big/book_11.png",
                               "/books_big/book_12.png",
                               "/books_big/book_13.png",
                               "/books_big/book_14.png",
                               "/books_big/book_15.png",
                           ]}
                           fps={6}
                           scale={4}
                       />
                      
                       <h3>Hvorfor endnu en læseapp?</h3>
                       <p>Goodreads har længe været det klare valg for de læsere, der gerne vil skabe sig overblik over, hvad de læser – primært fordi de fik en stor brugerbase meget tidligt. Men både appen og hjemmesiden kunne klare en kærlig hånd – de ligner noget fra det forrige århundrede, og Amazon tager ikke initiativ til at udvikle brugeroplevelsen.</p>
  
                       <p>Flere har forsøgt at skabe nye, moderne versioner af konceptetet. Min research af konkurrende produkter har dog den klare konklusion, at udviklere bliver ved med at begå én af to graverende fejl:</p>
                       <ul>
                           <li>enten har de taget Goodreads’ formular og puttet den i en pænere skal (uden at tænke længe over, hvordan brugeren kan komme hurtigere eller lettere i mål),</li>
                           <li>eller også har de forsøgt at bygge videre på formularen; men videreudviklingen består først og fremmest i at give brugeren mulighed for at indtaste langt mere data om bogen og deres læsning. Et falsk hensyn, der får appen til at føles som arbejde frem for sjov.</li>
                       </ul>
                      
                       <p>De fleste læseapps er bygget op som lister af lister. Du får en liste over bøger, som du har læst + en liste over bøger du er i gang med at læse osv. Brugeren flytter bøgerne fra en liste til en anden til en tredje … </p>
                      
                       <p>Det fungerer, men det kan gøres langt mere intuitivt. Derfor: PageTurner.</p>
                      
                       <h3>Alt på en hylde</h3>
                       <p>Læste bøger, igangværende læsninger, droppede bøger – alt sammen i en ordnet visning, der gør det let at skabe sig et overblik over dine læsevaner!</p>
 
                       <Shelf />
 
                       <h3>Del hvert øjeblik</h3>
                       <p>Normalt giver læseren én bedømmelse, når bogen er afsluttet. Men hvad hvis man kunne dele sine tanker når som helst undervejs på rejsen?</p>
                      
                       <p>På Instagram ser vi kvinder bryde sammen af glæde, når de modtager en bog, hvor deres veninder har efterladt noter i margenerne. En bog er ikke bare sin slutning, og de tanker, vi gør os undervejs, betyder meget. Derfor lægger PageTurner op til, at du skriver dine tanker frem, hvor langt du end er nået. Kig tilbage: Hvor tog du fejl, hvor lærte du noget nyt …</p>
                      
                       <p>Bare rolig: Du kan efterlade spoiler warnings for ikke at afsløre noget for dine venner uden deres samtykke. Tal frit fra leveren!</p>
 
                       <h3>PageTurner byder på mange ekstra goder:</h3>
                       <ul>
                           <li>Figurer og grafer vækker dine læsevaner til live. Med PageTurner er det altid let at se, hvor mange sider og hvilke genrer du læser, hvor mange stjerner du giver i gennemsnit, m.m.</li>
                       <img src={ratingGraph} alt="Rating graph" className={styles.displayImage} />
                           <li>Scan ISBN-koder! På den måde slipper du for at taste, og du sikrer dig, at eksemplaret i appen er akkurat det samme, som du holder i hånden.</li>
                           <li>Du kan vælge op til tre yndlingsbøger og udstille dem på din profil.</li>
                       </ul>
                   </div>
               </div>
           );
       case 'WishWell':
           return (
               <div className={styles.element} style={{ gridColumn: '2 / span 8', gridRow: '5' }}>
                   <div className={styles.moovingBackground}>
                       <img
                           src={
                               starStanding
                           }
                           alt="Wish Upon a Star"
                           className={styles.starImage}
                       />
                   </div>
                  
                   <p>I 2025 programmerede jeg en hjemmeside som invitation til mit bryllup. Her kunne gæsterne tilmelde sig og reservere ønsker. WishWell er bygget oven på min oprindelige kode.</p>
                  
                   <p>I dag kan hvem som helst oprette ønskelister til alle former begivenheder for at være sikre på, at de får akkurat det, som de har ønsket dig. Gavegiverne kan reservere ønske, og på den måde undgår du dubletter.</p>
                  
                   <p>Nye gode tiltag er lagt oven i alt det, der fungerer bedst konkurrende apps:</p>
                   <ul>
                       <li>Andre apps kræver, at dine venner og familie opretter en profil, hvis de skal reservere ønsker; det gør WishWell ikke. I stedet har du mulighed for at sende unikke links, der binder personen til reservationerne. Hvis gavegiveren ændrer mening, bruger de samme link igen for at tilføje nye eller slette gamle reservationer</li>
                       <li>Fodr appen med et link til et produkt, og du behøver ikke selv at taste; WishWell henter automatisk produktnavn og -beskrivelse, pris, billede m.m.</li>
                       <li>Andre apps er lette at snyde; ad bagveje kan brugeren meget let skabe sig overblik over, hvilke gaver i deres ønskeliste, der er reserverede. Det ødelægger overraskelsen, men det kan være svært at lade være med at tage et smugkig. WishWell tager alle forholdsregler for at undgå, at fristelsen presser sig på.</li>
                       <li>WishWell lader dig oprette kategorier i hver ønskeliste. Gør det lettere for dig selv og gavegiverne at finde rundt i dine ønsker.</li>
                   </ul>
                  
                   <h3>Hvad er på tegnebrættet?</h3>
                   <p>Det kan være svært at finde på noget at ønske sig. WishWell skal selvfølgelig give inspiration til ønsker, der er mere kreative end ’Nye sokker’ eller ’Nye underbukser’. En ny inspirationsside er på vej!</p>
               </div>
           );
       case 'DreamTrail':
           return (
               <div className={styles.element} style={{ gridColumn: '2 / span 8', gridRow: '5' }}>
                    <img className={styles.displayImage} src={walkEx} alt="Katalogica" />

                   <h3>En dårlig oplevelse gav inspiration</h3>
                    <p>Sidste år downloadede jeg en app, der gav et spændende løfte: Hvis jeg kunne gå/løbe/cykle en længere distance, ville jeg blive belønnet med en specialdesignet medalje. Jeg skulle følge en fiktiv historie og gå i fodsporene på dens karakterer – virkeligt motiverende!</p> 
                    <p>Men sjældent har jeg haft en kedeligere oplevelse som bruger.</p>
                    
                    <p>Medaljen var et godt stykke håndværk, men da jeg havde haft den hængende et par uger, pakkede jeg den alligevel i kælderen. Til gengæld var appen på ingen måde velholdt, og det stod klart, at udviklerne af konceptet gik mere op i at indfange købere end at holde på brugerne. Alt fra oprettelse til almen navigation i appen var forvirrende, og designet var ligefremt grimt.</p>
                    
                    <p>Jeg fik en følelse af at have spildt mine penge. Og jeg tænkte: Det må være muligt at udvikle et bedre alternativ.</p>
                    
                    <h3>Så det gjorde jeg!</h3>
                    <p>
                        Der venter ingen fysisk præmie for enden af en udfordring i DreamTrail. 
                        Til gengæld er appen designet med brugeren i fokus, og den er helt gratis at bruge.
                    </p>
                    
                    <p>
                        DreamTrail skal motivere dig til at bevæge dig længere. Det gør den gennem engagerende udfordringer, grafer og virtuelle belønninger.
                        Om brugeren har lyst til at bevæge sig alene eller sammen med vennerne, er op til dem. 
                        Udfordringerne er designet til også at kunne gennemføres i fællesskab, og appen gør det let at dele resultater med vennerne.
                    </p>
                    
                    <p>
                        Er du et konkurrencemenneske? Start en udfordring med dine venner, og se, hvem der kommer først i mål!
                    </p>
                    
                    <h3>Hvad er på tegnebrættet?</h3>
                    <p>
                        Til en start en DreamTrail udgivet uden skræddersyede udfordringer – brugeren kan kun oprette sine egne. Det er en god måde at teste konceptet af, og det giver mig mulighed for at se, hvordan brugerne interagerer med appen, og hvad de har lyst til at bruge den til.
                   </p>
               </div>
           );
       case 'Katalogica':
           return (
               <div className={styles.element} style={{ gridColumn: '2 / span 8', gridRow: '5' }}>
                    <img className={styles.displayImage} src="/projects/k_concept_dk.png" alt="Katalogica" />

                   
                   <h3>En gigantisk udfordring løst med AI</h3>
                   <p>På Syddansk Universitet har biblioteket 100.000-vis af materialer, som brugerne ikke kan tilgå, fordi de ikke er registreret. På Det Kgl. Bibliotek overstiger antallet én million.</p>
                  
                   <p>En aften sad jeg og så Agatha Christies Poirot, da jeg fik en indskydelse, der skulle vise sig at gøre registreringen 10 gange hurtigere. Mens filmen kørte skrev jeg hurtigt et program, der kunne høste tekst fra et titelblad, sortere titel, forfatternavn, udgivelsesår mm. og således danne første udkast til en bibliotekspost på få sekunder. Dagen efter gik jeg til min leder på Syddansk Universitet – og jeg fik lov til at udvikle Katalogica.</p>
                   
                   <p>At læse titelblade for at producere poster automatisk var prøvet mange gange før. Mit producerede som det første inden for den danske biblioteksverden præcise nok resultater til at kunne bruges i det daglige – også når det kom til de krøllede gotiske bogstaver, som er at finde i mange ældre bøger.</p>
                  
                   <h3>Da AI ikke var nok, UX!</h3>
                   <p>Statens IT-løsninger kan ofte få en til at tænke: Der har ikke været en designer inden for en 10 kilometers radius, da det her blev program blev udviklet. Man spilder meget tid og mange clicks på handlinger, der burde være simple. Det frustrerede mig som nyuddannet at blive mødt af ineffektive systemer – og derfor blev jeg alvorligt interesseret i UX-design.</p>
                  
                   <p>Jeg havde forskningstid på biblioteket, og i min fritid blev jeg certificeret designer. Jeg tegnede wireframes og realiserede dem i Figma for at skabe mig en idé om Katalogicas arkitektur. Også min fritid brugte jeg på alverdens småprojekter, som kunne træne mig i håndværket, og jeg begyndte for alvor at specialisere mig i at programmere apps.</p>
                  
                   <p>Image processing leverer ikke fejlfri resultater. Katalogica måtte nødvendigvis gøre det så gnidningsfrit som muligt at rette til, hvor AI stadig ikke kunne følge med den menneskelige intelligens.</p>
                  
                   <p>Jeg beholdt billedet som reference og placerede den fulde tekst i midten, så det var let at kopiere tekst over, hvor noget alligevel var sorteret ukorrekt. Romertal blev automatisk oversat til arabertal, og små mellemprocesser sørgede blandt andet for at forfattere blev stavet med stort.</p>
 
                   <h3>Udgivelser om Katalogica</h3>
                   <p>Læs mere om rejsen i mine udgivelser:</p>
                   <ul>
                       <li>
                           <Link to="https://rauli.cbs.dk/index.php/revy/article/view/7356" target="_blank" rel="noopener noreferrer">
                               <span style={{ fontWeight: 'bold' }}>Artikel i REVY: Tidsskrift for Danske Fag-, Forsknings- og Uddannelsesbiblioteker</span>
                           </Link>
                       </li>
                       <li>
                           <Link to="https://www.sdu.dk/da/bibliotek/om-biblioteket/special-collections/nyheder-og-projekter/kunstigintelligensregistrerersaersamlingerne" target="_blank" rel="noopener noreferrer">
                               <span style={{ fontWeight: 'bold' }}>Intern artikel fra Syddansk Universitet</span>
                           </Link>
                       </li>
                   </ul>
                  
                   <p>Projektet er desværre lagt på is, efter jeg sagde op på Syddansk Universitet. Der var ingen til at overtage vedligeholdelsen af programmet efter mig.</p>
               </div>
           );
       default:
           return null;
   }
}
