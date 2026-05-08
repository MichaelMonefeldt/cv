import {useState} from 'react'; 
import PixelSprite from './PixelSprite';
import styles from '../styles/Project.module.css';

export default function Bodies({project}) {
    const [isHovered, setIsHovered] = useState(false);
    switch (project) {
        case 'PageTurner':
            return (
                <div className={styles.element} style={{ gridColumn: '2 / span 8', gridRow: '5' }}>
                    <div>
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

                        <h3>Et unikt tiltag: Del hvert øjeblik</h3>
                        <p>Normalt giver læseren én bedømmelse, når bogen er afsluttet. Men hvad hvis man kunne dele sine tanker når som helst undervejs på rejsen?</p>
                        
                        <p>På Instagram ser vi kvinder bryde sammen (af glæde), når de modtager en bog, hvor deres veninder har efterladt noter i margenerne. En bog er ikke bare sin slutning, og de tanker, vi gør os undervejs, betyder meget. Derfor lægger PageTurner op til, at du skriver dine tanker ned hele rejsen igen. Kig tilbage på, hvor du tog fejl, hvor du lærte noget nyt …</p>
                        
                        <p>Bare rolig: Du kan efterlade spoiler warnings for ikke at afsløre noget for dine venner uden deres samtykke. Tal frit fra leveren!</p>

                        <p>PageTurner byder på mange ekstra goder:</p>
                        <ul>
                            <li>Figurer og grafer illustrere dine læsevaner live. Med PageTurner er det altid let at orientere sig om, hvor mange sider og hvilke genrer du læser, hvor mange stjerner du giver bøger i gennemsnit, m.m.</li>
                            <li>Scan ISBN-koder! På den måde slipper du for at taste, og du sikrer dig, at eksemplaret i appen er akkurat det samme, som det du holder i hånden.</li>
                            <li>Du kan vælge op til tre yndlingsbøger og udstille dem på din profil.</li>
                        </ul>
                    </div>
                </div>
            );
        case 'WishWell':
            return (
                <div className={styles.element} style={{ gridColumn: '2 / span 8', gridRow: '5' }}>
                    <p>Der findes mange måder at dele ønsker med familie og venner, såsom sociale medier, e-mails og traditionelle ønskelister. WishWell adskiller sig ved at tilbyde en mere interaktiv og engagerende platform, der ikke kun giver brugerne mulighed for at dele deres ønsker
                    </p>
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
        default:
            return null;
    }
}