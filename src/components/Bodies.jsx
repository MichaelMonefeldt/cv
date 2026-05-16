import {useState} from 'react'; 
import PixelSprite from './PixelSprite';
import Shelf from './Shelf';
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
                        <p>Goodreads har længe domineret inden for logning af læsevaner. Men både appen og hjemmesiden har brug for en kærlig hånd – de ligner noget fra det forrige århundrede, og det er for længe siden, at Amazon har taget initiativ til at udvikle brugeroplevelsen.</p>
    
                        <p>Flere har forsøgt at lave nye, moderne versioner af appen, men i min research af konkurrerende produkter er jeg oftest stødt på et af to graverende problemer:</p>
                        <ul>
                            <li>enten har man blot taget Goodreads formular og puttet den i en pænere skal (uden at tænke længe over, hvordan brugeren kan komme hurtigere eller lettere i mål),</li>
                            <li>eller også har man forsøgt at bygge ovenpå formularen; men videreudviklingen består først og fremmest i at give brugeren mulighed for at indtaste data i et væk om bogen. Et falsk hensyn, der får brugen af appen til at føles som arbejde frem for adspredelse.</li>
                        </ul>
                        
                        <p>De fleste læseapps er bygget op som lister af lister. Du har en liste over bøger, du har læst + en liste over bøger du er i gang med at læse etc. Brugeren flytter bøgerne fra en liste til en anden, når de begynder at læse, og til en tredje, når de er færdige.</p>
                        
                        <p>Det fungerer, men det kan gøres mere intuitivt. Derfor: PageTurner.</p>
                        
                        <h3>Alt på en hylde</h3>
                        <p>Læste bøger, igangværende læsninger, droppede bøger – alt sammen i en ordnet visning, der gør det let at få overblik over dine læsevaner!</p>

                        <Shelf />

                        <h3>Et unikt tiltag: Del hvert øjeblik</h3>
                        <p>Normalt giver læseren én bedømmelse, når bogen er afsluttet. Men hvad hvis man kunne dele sine tanker når som helst undervejs på rejsen?</p>
                        
                        <p>På Instagram ser vi kvinder bryde sammen (af glæde), når de modtager en bog, hvor deres veninder har efterladt noter i margenerne. En bog er ikke bare sin slutning, og de tanker, vi gør os undervejs, betyder meget. Derfor lægger PageTurner op til, at du skriver dine tanker ned hele rejsen igen. Kig tilbage på, hvor du tog fejl, hvor du lærte noget nyt …</p>
                        
                        <p>Bare rolig: Du kan efterlade spoiler warnings for ikke at afsløre noget for dine venner uden deres samtykke. Tal frit fra leveren!</p>

                        <p>PageTurner byder på mange ekstra goder:</p>
                        <ul>
                            <li>Figurer og grafer vækker dine læsevaner til live. Med PageTurner er det altid let at se, hvor mange sider og hvilke genrer du læser, hvor mange stjerner du giver i gennemsnit, m.m.</li>
                            <li>Scan ISBN-koder! På den måde slipper du for at taste, og du sikrer dig, at eksemplaret i appen er akkurat det samme, som det du holder i hånden.</li>
                            <li>Du kan vælge op til tre yndlingsbøger og udstille dem på din profil.</li>
                        </ul>
                    </div>
                </div>
            );
        case 'WishWell':
            return (
                <div className={styles.element} style={{ gridColumn: '2 / span 8', gridRow: '5' }}>
                    <p>I forbindelse med mit bryllup i 2025 programmerede jeg en hjemmeside, som fungerede som invitation, og som lod gæsterne tilmelde sig og reservere ønsker. WishWell er bygget oven på min oprindelige kode.</p>
                    
                    <p>Opret ønskelister til alle former begivenheder og vær sikker på, at du får akkurat det, som du har ønsket dig. Gavegiverne kan reservere ønske, og på den måde undgår du dubletter.</p>
                    
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
                    <p>Der findes mange fitness-apps på markedet, men
                    de fleste fokuserer på at spore træning og give anbefalinger baseret på det. DreamTrail adskiller sig ved at tilbyde en mere interaktiv og engagerende platform, der ikke kun giver brugerne mulighed for at spore
                    </p>
                </div>
            );
        case 'Katalogica':
            return (
                <div className={styles.element} style={{ gridColumn: '2 / span 8', gridRow: '5' }}>
                    <h3>En gigantisk udfordring løst med AI</h3>
                    <p>På Syddansk Universitet har biblioteket 100.000-vis af materialer, som brugerne ikke kan tilgå eller låne, fordi de ikke er registreret. På Det Kgl. Bibliotek overstiger antallet én million. Begge institutioner arbejder på sagen, men selv med</p>
                    
                    <p>En aften sad jeg og så Agatha Christies Poirot, da jeg fik en indskydelse, der skulle vise sig at gøre registreringen 10 gange hurtigere. Jeg skrev hurtigt et program, der kunne høste tekst fra et titelblad (selv med gamle krøllede bogstaver), sortere titel, forfatternavn, udgivelsesår mm. og således lave første udkast til en bibliotekspost på få sekunder. Dagen efter gik jeg til min leder på Syddansk Universitet – og jeg fik lov til at udvikle Katalogica.</p>
                    
                    <p>At læse titelblade for at producere poster automatisk var prøvet mange gange før. Mit producerede som det første inden for den danske biblioteksverden præcise nok resultater til at kunne bruges i det daglige – også når det kom til de krøllede gotiske bogstaver, som er at finde i mange ældre bøger.</p>
                    
                    <h3>Da AI ikke var nok, UX!</h3>
                    <p>Statens interne IT-løsninger kan ofte få en til at tænke: Der har ikke været en designer inden for en radius på 10 kilometer, da det her blev program blev udviklet. Man spilder meget tid og mange clicks på handlinger, der burde være simple. Det frustrerede mig som nyuddannet at blive mødt af ineffektive organisationer – og det gjorde mig for alvor interesseret i UX-design.</p>
                    
                    <p>Jeg havde forskningstid på biblioteket, og i min fritid blev jeg certificeret designer. Jeg tegnede wireframes og realiserede dem i Figma for at skabe mig en idé om Katalogicas arkitektur. Også min fritid brugte jeg på alverdens småprojekter, som kunne træne mig håndværket, og jeg begyndte for alvor at specialisere mig i at programmere apps.</p>
                    
                    <p>Image processing leverer ikke fejlfri resultater. Katalogica måtte nødvendigvis gøre det så gnidningsfrit som muligt at rette til, hvor AI stadig ikke kunne følge med den menneskelige intelligens.</p>
                    
                    <p>Jeg beholdt billedet som reference og placerede den fulde tekst i midten, så det var let at kopiere tekst over, hvor noget alligevel var sorteret ukorrekt. Romertal blev automatisk oversat til arabertal, og små mellemprocesser sørgede blandt andet for at forfattere blev stavet med stort.</p>
                    
                    <h3>Udgivelser om Katalogica:</h3>
                    <p>https://www.sdu.dk/da/bibliotek/om-biblioteket/special-collections/nyheder-og-projekter/kunstigintelligensregistrerersaersamlingerne</p>
                    <p>https://rauli.cbs.dk/index.php/revy/article/view/7356</p>
                    
                    <p>Projektet er desværre lagt på is, efter jeg stoppede på Syddansk Universitet, da der ikke var nogen til at overtage vedligeholdelsen af systemet.</p>
                </div>
            );
        default:
            return null;
    }
}