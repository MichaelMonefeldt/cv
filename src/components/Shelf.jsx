import React, { useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";
import Expandable from "../components/Expandable";
import Button from "../components/Button";
import frog from "../assets/images/frog.svg";
import searchIcon from "../assets/images/search.svg";
import filterListIcon from "../assets/images/filter_list.svg";
import checkIcon from "../assets/images/check_white.svg";
import closeIcon from "../assets/images/close_white.svg";
import styles from "../styles/Shelf.module.css";

const portfolioShelfData = {
  username: "Michael",
  books: [
        {
            "id": 43,
            "title": "Harry Potter and the Order of the Phoenix",
            "authors": [
                "J. K. Rowling"
            ],
            "google_volume_id": "p6YyEAAAQBAJ",
            "thumbnail": "http://books.google.com/books/publisher/content?id=p6YyEAAAQBAJ&printsec=frontcover&img=1&zoom=1&imgtk=AFLRE70oMguTys3bTNs9rs53So5rxJS2vIVy-7GSw2Bz_G8OVb_ChBeDj8zxfalPUBdZcS10tLkec4NrmxTDVSF89IKMSEDHHTgK0uxB4Zj3RRjPchkil9-FnRonOjKFWnRFxJzUh_43&source=gbs_api",
            "status": "reading",
            "progress": 0.508578431372549
        },
        {
            "id": 42,
            "title": "Mockingjay (Hunger Games, Book Three)",
            "authors": [
                "Suzanne Collins"
            ],
            "google_volume_id": "Iw_gHtk4ghYC",
            "thumbnail": "http://books.google.com/books/content?id=Iw_gHtk4ghYC&printsec=frontcover&img=1&zoom=1&edge=curl&imgtk=AFLRE70fcqOCsMxkXVbUUCfjufvAhtrjujyAumk5iLwHGdBx2kwcb3ahLYNGAKDQOgMr1BvqNUZsxSUVhTH1oim1s0eOQX-NvfP29_GbExk1ZVyXB7B1EksRt-se9EIhrg_AujencJ1B&source=gbs_api",
            "status": "reading",
            "progress": 0.4
        },
        {
            "id": 40,
            "title": "Harry Potter and the Goblet of Fire",
            "authors": [
                "J. K. Rowling"
            ],
            "google_volume_id": "Q6TeDQAAQBAJ",
            "thumbnail": "http://books.google.com/books/publisher/content?id=Q6TeDQAAQBAJ&printsec=frontcover&img=1&zoom=1&imgtk=AFLRE73jivDW2BwPQye18x1Mr8OIqe9sYvCpURMG0xkgfjzSamhy883rrk6Km-zYRaakuA_NZbownCvLnHiumQydDzDpDCRBnGsLUi3NE5unFxnDGJ920ZAdwWzLfKfGejhB02eRReer&source=gbs_api",
            "status": "finished",
            "progress": null
        },
        {
            "id": 12,
            "title": "The Hobbit",
            "authors": [
                "J.R.R. Tolkien"
            ],
            "google_volume_id": "CixXEAAAQBAJ",
            "thumbnail": "http://books.google.com/books/publisher/content?id=CixXEAAAQBAJ&printsec=frontcover&img=1&zoom=1&imgtk=AFLRE70Pdp5BwXN0u3AVEpIm_Pb7z8dhuUsa4DwXCF5G0xMT1PP_c9cr8XY9_LvIn_RlJnuGvV1MsCLDYkt05F4-JJRcWjccG4WeolwUzqIIJqbn-rgI2KO0353wY3kQRiO72b-4ezbz&source=gbs_api",
            "status": "reading",
            "progress": 0.20958083832335328
        },
        {
            "id": 41,
            "title": "Catching Fire (Hunger Games, Book Two)",
            "authors": [
                "Suzanne Collins"
            ],
            "google_volume_id": "FN5wMOZKTYMC",
            "thumbnail": "http://books.google.com/books/content?id=FN5wMOZKTYMC&printsec=frontcover&img=1&zoom=1&edge=curl&imgtk=AFLRE71Gs-6yIE1YAKJzJ1L2Di_h1nzjD9nFSIOt2duAoheqPJWzX6ndnlkjleZwb6qFWDQejYV1ZwUsjVaOikB3FnXGm1xSenYs-aZmJ18hZuDGHQHhe-Nwo-S1S9jWYlFvWq_WEaXB&source=gbs_api",
            "status": "finished",
            "progress": null
        },
        {
            "id": 6,
            "title": "A Clash of Kings",
            "authors": [
                "George R. R. Martin"
            ],
            "google_volume_id": "R7Wp_JlmFIQC",
            "thumbnail": "http://books.google.com/books/content?id=R7Wp_JlmFIQC&printsec=frontcover&img=1&zoom=1&imgtk=AFLRE700ndWHJWoCQzWzCiOYbTMYn_so4roDzLIqA6xjBPO85q9o89eoeRxRwSO-Cafg3Lbwbqa9zK5lcQiynvfOnTmMXNf3tgHGxuhVG41-2JfIypgVknYjngJa4atClVl0kTMSmji8&source=gbs_api",
            "status": "reading",
            "progress": 0.2611683848797251
        },
        {
            "id": 38,
            "title": "The Queen's Gambit",
            "authors": [
                "Walter Tevis"
            ],
            "google_volume_id": "dMUQrgEACAAJ",
            "thumbnail": "http://books.google.com/books/content?id=dMUQrgEACAAJ&printsec=frontcover&img=1&zoom=1&imgtk=AFLRE72ZBr9QkfcijxmUIcgfPo5C6hTgfehv3wOqQyLa5EG990y29Tvh9rXvrD5lxKrR3r8g56UAu_hIswE1AEYzJzG5OKR0KbA8koUEineeO-tolmFJ4hU1LktKDGLRtHkmJZbTZUEd&source=gbs_api",
            "status": "finished",
            "progress": null
        },
        {
            "id": 37,
            "title": "The Woman Destroyed",
            "authors": [
                "Simone de Beauvoir"
            ],
            "google_volume_id": "zZ1cAAAAMAAJ",
            "thumbnail": "http://books.google.com/books/content?id=zZ1cAAAAMAAJ&printsec=frontcover&img=1&zoom=1&imgtk=AFLRE73GJ4eBB6U3Ahf4Ef7iMkGyhUdrn-rYOVpED6p-DiOVAR0BAzkxBbUB9V5ntW_6iS7ON_sp9owLCg2GDnHZODyK_5gkcxrHXSbTYWdUfYDTRxNyAPj5pJ7O7k5_DhI_EqijCFiw&source=gbs_api",
            "status": "finished",
            "progress": null
        },
        {
            "id": 36,
            "title": "Fahrenheit 451",
            "authors": [
                "Ray Bradbury"
            ],
            "google_volume_id": "PEhUdGqVP38C",
            "thumbnail": "http://books.google.com/books/content?id=PEhUdGqVP38C&printsec=frontcover&img=1&zoom=1&imgtk=AFLRE706R1RDZGe_BEYpR_ftO1M-TIOgPGtZ0qWhxfubccZetIB_x704dscjsXu1lgwrSICU8sV6jtQe7QXnTSBDu47TPxTqPx5mc-Vc0Li1_50CFHgwmQ2b3gRrXKHWa3yigDTT5mAQ&source=gbs_api",
            "status": "finished",
            "progress": null
        },
        {
            "id": 35,
            "title": "A Pair of Silk Stockings",
            "authors": [
                "Kate Chopin"
            ],
            "google_volume_id": "4dmvoQEACAAJ",
            "thumbnail": "http://books.google.com/books/content?id=4dmvoQEACAAJ&printsec=frontcover&img=1&zoom=1&imgtk=AFLRE72jX7ItSdX6tcAEe30lf--OYgFWF_u1Cz2a9mnIxTaorUAvhCX7dpLWUX5LbdegzsLRWf9My8ExvunsiTBUO5rm1n8DvKhMalO7zENmcOeZatd5jJhCoKMFE-oo8itQ6TzQAiM1&source=gbs_api",
            "status": "finished",
            "progress": null
        },
        {
            "id": 34,
            "title": "Murder on the Orient Express",
            "authors": [
                "Craig Sodaro"
            ],
            "google_volume_id": "mqDEqJMosnAC",
            "thumbnail": "http://books.google.com/books/content?id=mqDEqJMosnAC&printsec=frontcover&img=1&zoom=1&edge=curl&imgtk=AFLRE71DYJEOZn0BrihW6cMMPdaxMX1qyw9AKHtfKWRIRCvmff6YqU1qDIf0IRkyrBh_5qcgm6XN5vY6agGX9FhQIAGusEHSvGjs7qOJBPiVoprTaGzSOXp9zsgvK1_go2kZxieIKC4J&source=gbs_api",
            "status": "finished",
            "progress": null
        },
        {
            "id": 33,
            "title": "And Then There Were None",
            "authors": [
                "Agatha Christie"
            ],
            "google_volume_id": "CVBObgUR2zcC",
            "thumbnail": "http://books.google.com/books/content?id=CVBObgUR2zcC&printsec=frontcover&img=1&zoom=1&imgtk=AFLRE73X75a5M04CgH-COC11DgoUBFwggqA7UHSKLsoAiZhirtaFnKGVlRjEeWI863sAnWMiQhXW6QmsVz19aTcfAPDg1_cCpxyNODbt0R3pWwMGkznVBEFFKEoyi0r3DEJLtRakECP9&source=gbs_api",
            "status": "finished",
            "progress": null
        },
        {
            "id": 32,
            "title": "A Wrinkle in Time",
            "authors": [
                "Madeleine L'Engle"
            ],
            "google_volume_id": "kLjyngEACAAJ",
            "thumbnail": "http://books.google.com/books/content?id=kLjyngEACAAJ&printsec=frontcover&img=1&zoom=1&imgtk=AFLRE73b5rOYF1z0ivKi6bigjL7aasrAAHjIIpRKZ-65dSdl7tJ1AL3j7bV36mAGvElmdFBmEMVCCEfmC17w0734OpjmSQ9l8-QVXvXKtHjoMXDCZaVS7zsrM0pa3jXHhM_qaI8-WYnC&source=gbs_api",
            "status": "abandoned",
            "progress": null
        },
        {
            "id": 31,
            "title": "Dune",
            "authors": [
                "Frank Herbert"
            ],
            "google_volume_id": "GkYFzgEACAAJ",
            "thumbnail": "http://books.google.com/books/content?id=GkYFzgEACAAJ&printsec=frontcover&img=1&zoom=1&imgtk=AFLRE73DxTQY1xuKxNM616ygJr9EikfDF9qsdNngUxoVhwSDtl1hu_HebOmnr2Hl6D1xelLg5tMGf_DhUWW6FIa-j8UA7T-GMbUltJjXR7FamzedbH_MQfDEdcGgw-dFHIVT0KQMbrrq&source=gbs_api",
            "status": "finished",
            "progress": null
        },
        {
            "id": 30,
            "title": "The Bell Jar",
            "authors": [
                "Sylvia Plath"
            ],
            "google_volume_id": "wEDozgEACAAJ",
            "thumbnail": "http://books.google.com/books/content?id=wEDozgEACAAJ&printsec=frontcover&img=1&zoom=1&imgtk=AFLRE71fHoniTPpuoTiBBTVlXQmkLsL4VU9VBiJeDoC9QqX0uD4IRQJfFu9dmufVa1ZHXrOYKKLXgcT_ZjudXAy1Faii8ToNmbuuIb8FZH9rNY-P2l_QGnEkscrab9geMIsm08NZHWw7&source=gbs_api",
            "status": "finished",
            "progress": null
        },
        {
            "id": 29,
            "title": "Little Women",
            "authors": [
                "Louisa May Alcott"
            ],
            "google_volume_id": "He3YCwAAQBAJ",
            "thumbnail": "http://books.google.com/books/publisher/content?id=He3YCwAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&imgtk=AFLRE71HnRJwIufuRjCgzc5t7b2PQUNAkCnwduOlm2RkiO4Ywnv3oJa1tWlhmN3eEM9ccnbj10U0rD2oUEl8_7ZIXG6OTpBlw-uSFEgZQgHVVgtfrvt0TMoafS9j1l9QMwbOQ8Ox8ss9&source=gbs_api",
            "status": "finished",
            "progress": null
        },
        {
            "id": 28,
            "title": "Sense and Sensibility",
            "authors": [
                "Jane Austen"
            ],
            "google_volume_id": "UEvJvgEACAAJ",
            "thumbnail": "http://books.google.com/books/content?id=UEvJvgEACAAJ&printsec=frontcover&img=1&zoom=1&imgtk=AFLRE725l7BoxXCIfFhvqWNfcFi1sWnucCwhWJfIZcSHeTKueEJwpi7DcrDBF8mKIXUEiAZn5CE_hLpA0UM6VjCEC7WCJbG_BVAPW4JasISStjolwGzb0ELYBcGxPz8GZoIVZgxPSrev&source=gbs_api",
            "status": "finished",
            "progress": null
        },
        {
            "id": 27,
            "title": "Stories of Your Life and Others",
            "authors": [
                "Ted Chiang"
            ],
            "google_volume_id": "XIRKDAAAQBAJ",
            "thumbnail": "http://books.google.com/books/publisher/content?id=XIRKDAAAQBAJ&printsec=frontcover&img=1&zoom=1&imgtk=AFLRE72CUrvr1hfLB9rEY5pQa-TWX5GMdQg1w4FanKBLnQz1KVRBNznn3CkdENzcZNGm7ONnwlDFwhM-cLRmKdysQqYqdpPcPgId-farX1rug8onYjOfEz4y294VlugJ035sAYXtXaTF&source=gbs_api",
            "status": "finished",
            "progress": null
        },
        {
            "id": 26,
            "title": "The Remains of the Day",
            "authors": [
                "Kazuo Ishiguro"
            ],
            "google_volume_id": "irY7QgAACAAJ",
            "thumbnail": "http://books.google.com/books/content?id=irY7QgAACAAJ&printsec=frontcover&img=1&zoom=1&imgtk=AFLRE71q0liGBMx8J4AnRwRec8qFNlErsDKqFfPh7zgqb4EfJcQP5lMuR5a-laQMJHGIi4P4bpO-T5FlzrLvVIi7c6f1ihHmViYz_Ol-00FWz81_r3LuyoZxZK5Zm-YjcgezZbIKrLXj&source=gbs_api",
            "status": "finished",
            "progress": null
        },
        {
            "id": 25,
            "title": "Klara and the Sun",
            "authors": [
                "Kazuo Ishiguro"
            ],
            "google_volume_id": "3Bt-zgEACAAJ",
            "thumbnail": "http://books.google.com/books/content?id=3Bt-zgEACAAJ&printsec=frontcover&img=1&zoom=1&imgtk=AFLRE72M8zHp4m3lDeKI5wG6TzSUlqnySYIhKE9hZeaYTK23R2LjPRVP4VMyFb_si3JGnfA3d4dIXi_-r6srP41lfujrpXjAGYA43Y1zC3qOXfTelvQqd-05sGt9DjoTXu2WQlqwcQvL&source=gbs_api",
            "status": "finished",
            "progress": null
        },
        {
            "id": 24,
            "title": "The Haunting of Hill House",
            "authors": [
                "Shirley Jackson"
            ],
            "google_volume_id": "uB2pmLvPL6sC",
            "thumbnail": "http://books.google.com/books/content?id=uB2pmLvPL6sC&printsec=frontcover&img=1&zoom=1&imgtk=AFLRE72BUd3v_SbwswoHaFx9Cc_Z-THZi2hjSSwTFHvKrbLDFVlOV4ovw3DnrNCMEbvlMVAD8Rktyz-rgDH_YgcRSpVJkXXhr_NIpRnmigJHiHHsZKFiO2MC_4XjD2IL6-JdzzWsi5dF&source=gbs_api",
            "status": "finished",
            "progress": null
        },
        {
            "id": 23,
            "title": "The Night is Darkening Round Me",
            "authors": [
                "Emily Brontë"
            ],
            "google_volume_id": "XLzjoQEACAAJ",
            "thumbnail": "http://books.google.com/books/content?id=XLzjoQEACAAJ&printsec=frontcover&img=1&zoom=1&imgtk=AFLRE73dF6DFUwFbnrF2CQzyBkYKIly4aCAaQpg1WXVTcn01TLUDr_406C86QOuU-OtsQvPw4fB7DMOIQJmhZ1vbuRf9MtF81Uu-9-LCm8WaPJAyiWBNd_umm1IisojAPyy7S8YXCKV9&source=gbs_api",
            "status": "finished",
            "progress": null
        },
        {
            "id": 22,
            "title": "Wuthering Heights",
            "authors": [
                "Emily Brontë"
            ],
            "google_volume_id": "Efp6xAEACAAJ",
            "thumbnail": "http://books.google.com/books/content?id=Efp6xAEACAAJ&printsec=frontcover&img=1&zoom=1&imgtk=AFLRE728RUSkbhFLp4XylL9Z3agKMMAFNdfoMB8qTXMO1g8TotB7MpI8YRtQVHMRjTZTa8857J9lUwPEYGXFxOdvznRNcEpLpTgWKYIJzg7gtWFZc20-r78ctcNhMAl4iZN88v1CyhgI&source=gbs_api",
            "status": "finished",
            "progress": null
        },
        {
            "id": 21,
            "title": "The Ballad of Songbirds and Snakes (A Hunger Games Novel)",
            "authors": [
                "Suzanne Collins"
            ],
            "google_volume_id": "Ol7eDwAAQBAJ",
            "thumbnail": "http://books.google.com/books/publisher/content?id=Ol7eDwAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&imgtk=AFLRE72PauBBBf8plNxPcERXXsKxjvFkxkySH4xeP2x2J0k-VjvUYO2ySQV4oT-YjtXBzT4yQ5geQsgJGde9GUzSYqBlwbpNF_Gpy2Kliu407peqM7ZSH_ENc8VlSkA7H0hHeeBPqtDj&source=gbs_api",
            "status": "abandoned",
            "progress": null
        },
        {
            "id": 20,
            "title": "The Hunger Games",
            "authors": [
                "Suzanne Collins"
            ],
            "google_volume_id": "cQHs0QEACAAJ",
            "thumbnail": "http://books.google.com/books/content?id=cQHs0QEACAAJ&printsec=frontcover&img=1&zoom=1&edge=curl&imgtk=AFLRE70jI4hswEHjC5BaJWY558s0TDxE_Eansln5351B1j34IU8rBEWbsQlm-z_S0SVFp5kaQn2KH95llrFzijU0nKeNZU5u9PIMcWzEgjUxwuTL0zpSmdTpR9YKo5IcjNj3CkltQLFQ&source=gbs_api",
            "status": "finished",
            "progress": null
        },
        {
            "id": 19,
            "title": "Løgneren",
            "authors": [
                "Martin A. Hansen"
            ],
            "google_volume_id": "QhN_BwAAQBAJ",
            "thumbnail": "http://books.google.com/books/publisher/content?id=QhN_BwAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&imgtk=AFLRE723UbcnMK0IL6CmUIv-RJh_yEUvY_hnryArKrcTA8p5Z74QZ7oze8HcwJiYmMRsf_giIO8eW-fujIwcS6W3g6RhTDdEPuqzITqR3ZgU0HAf-nOD317DOK2O-Xh-0aoAg85RwDsF&source=gbs_api",
            "status": "finished",
            "progress": null
        },
        {
            "id": 18,
            "title": "Ronja røverdatter",
            "authors": [
                "Astrid Lindgren"
            ],
            "google_volume_id": "2zGZcHGuBCYC",
            "thumbnail": "http://books.google.com/books/content?id=2zGZcHGuBCYC&printsec=frontcover&img=1&zoom=1&edge=curl&imgtk=AFLRE71lScCmzvo5KAd8Ty14WvS-vWnkLhs5WYmBucVEttq2izsu_wg3e_Avycj22wQ1NhaV3hCK8Vy0LqV7ShoYXxlRN9_TPCGxyP7-kKEezWEsBCllknK4fAJRopTWyfdHTc9LAECf&source=gbs_api",
            "status": "finished",
            "progress": null
        },
        {
            "id": 17,
            "title": "Mio, min Mio",
            "authors": [
                "Astrid Lindgren"
            ],
            "google_volume_id": "Tr5ZSAAACAAJ",
            "thumbnail": "http://books.google.com/books/content?id=Tr5ZSAAACAAJ&printsec=frontcover&img=1&zoom=1&imgtk=AFLRE73brijeP4RN2Zwjl-NxNOykByjFa9_GF8nx1zVy9FscL8Hs4ElE3L6JGU4bfwjecfViv1oysC0LaSjGLBECN_vlMUx2I5EzULDYMPquiJuNNXxvJlA9qEgn0RZSvoxQMjrmVjkN&source=gbs_api",
            "status": "abandoned",
            "progress": null
        },
        {
            "id": 16,
            "title": "Brødrene Løvehjerte",
            "authors": [
                "Astrid Lindgren"
            ],
            "google_volume_id": "XLyd9aHmugsC",
            "thumbnail": "http://books.google.com/books/content?id=XLyd9aHmugsC&printsec=frontcover&img=1&zoom=1&edge=curl&imgtk=AFLRE700XMJUqKNY_cEoMxMx0wjSa9yqPmhFz_2_JSBLLhpxnwGpeG9NqAEtb8gUwiuJFfcWPjc7xuHJldMwNLtR7QM1zvuEou6UCYhL6pHsmLwpVniSuHyIVquyaFFwwpHjH2rcdLAa&source=gbs_api",
            "status": "finished",
            "progress": null
        },
        {
            "id": 15,
            "title": "A Game of Thrones",
            "authors": [
                "George R. R. Martin"
            ],
            "google_volume_id": "5NomkK4EV68C",
            "thumbnail": "http://books.google.com/books/content?id=5NomkK4EV68C&printsec=frontcover&img=1&zoom=1&edge=curl&imgtk=AFLRE72RfCapma7M0FY3VpjSIE2JwfHf5ooiqm4rzzSnbnin_7OTxRT7JgxaeFvgirb-GB1HHJWv8DaVMCq0vJ3sxZwnc3MU48uQY-TRyna9XuHDshWS5vms0FWpaoBZWrqCCU76xGeu&source=gbs_api",
            "status": "finished",
            "progress": null
        }
    ],
};

const getAuthorText = (authors) => {
  if (!Array.isArray(authors)) return "";
  return authors.join(", ");
};


export default function Shelf({
  setCurrentBookTitle = () => {},
  setCurrentBookAuthors = () => {},
  setCurrentBookThumbnail = () => {},
  isMobile = true,
}) {
  const navigate = useNavigate();

  const [query, setQuery] = useState("");
  const [searchActive, setSearchActive] = useState(false);
  const [sortBy, setSortBy] = useState("latest");
  const [status, setStatus] = useState("all");
  const [openSortMenu, setOpenSortMenu] = useState(false);

  const books = useMemo(() => {
    const normalizedQuery = query.trim().toLowerCase();

    return portfolioShelfData.books
      .filter((book) => {
        const matchesStatus = status === "all" || book.status === status;

        const matchesQuery =
          !normalizedQuery ||
          book.title.toLowerCase().includes(normalizedQuery) ||
          getAuthorText(book.authors).toLowerCase().includes(normalizedQuery);

        return matchesStatus && matchesQuery;
      })
      .sort((a, b) => {
        if (sortBy === "title") {
          return a.title.localeCompare(b.title);
        }

        if (sortBy === "authors") {
          return getAuthorText(a.authors).localeCompare(getAuthorText(b.authors));
        }

        return new Date(b.lastRead) - new Date(a.lastRead);
      });
  }, [query, sortBy, status]);

  const handleBookClick = (book) => {
    setCurrentBookTitle(book.title);
    setCurrentBookAuthors(getAuthorText(book.authors));
    setCurrentBookThumbnail(book.thumbnail);

    // Go to pageturner.orbitter.app (totally different domain) with the book's Google Volume ID as a query parameter
    window.open(`https://pageturner.orbitter.app/book/${book.google_volume_id}`, "_blank");
  };

  const sortAndFilterMenu = (
    <div className={styles.sortMenu}>
      <p style={{ opacity: 0.7, fontSize: "12px", color: "var(--text-color)" }}>
        Sort by
      </p>

      {["latest", "title", "authors"].map((opt) => (
        <button
          key={opt}
          className={`${styles.sortButton} ${sortBy === opt ? styles.active : ""}`}
          onClick={() => {
            setSortBy(opt);
            setOpenSortMenu(false);
          }}
          style={{
            backgroundColor: sortBy === opt ? "var(--text-color)" : "transparent",
            color:
              sortBy === opt
                ? "var(--secondary-background-color)"
                : "var(--text-color)",
          }}
        >
          {opt === "latest" ? "Last read" : opt.charAt(0).toUpperCase() + opt.slice(1)}
        </button>
      ))}

      <hr />

      <p
        style={{
          opacity: 0.7,
          fontSize: "12px",
          marginTop: "10px",
          color: "var(--text-color)",
        }}
      >
        Filter by
      </p>

      {["all", "reading", "finished", "abandoned"].map((stat) => (
        <button
          key={stat}
          className={`${styles.sortButton} ${status === stat ? styles.active : ""}`}
          onClick={() => {
            setStatus(stat);
            setOpenSortMenu(false);
          }}
          style={{
            backgroundColor: status === stat ? "var(--text-color)" : "transparent",
            color:
              status === stat
                ? "var(--secondary-background-color)"
                : "var(--text-color)",
          }}
        >
          {stat.charAt(0).toUpperCase() + stat.slice(1)}
        </button>
      ))}
    </div>
  );

  const shelfHeader = (
    <div className={styles.shelfHeader}>
      <h1 className={`${styles.shelfTitle} ${!searchActive ? styles.active : ""}`}>
        {portfolioShelfData.username}'s Shelf
      </h1>

      <div className={styles.searchContainer}>
        <input
          type="text"
          placeholder="Search shelf..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className={`${styles.searchInput} ${searchActive ? styles.active : ""}`}
        />

        <img
          src={searchIcon}
          alt="Search"
          className={`${styles.searchIcon} ${!searchActive ? styles.active : ""} invertible`}
          onClick={() => setSearchActive((prev) => !prev)}
        />

        {searchActive && (
          <button
            className={styles.clearButton}
            onClick={() => {
              setSearchActive(false);
              setQuery("");
            }}
          >
            ⨉
          </button>
        )}

        <Expandable
          open={openSortMenu}
          setOpen={setOpenSortMenu}
          image={filterListIcon}
          menuContent={sortAndFilterMenu}
        />
      </div>
    </div>
  );

  const shelfSidebar = (
    <div className={styles.shelfSidebar}>
      <input
        type="text"
        placeholder="Search shelf..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        className={`${styles.searchInput} ${styles.active}`}
      />

      {sortAndFilterMenu}
    </div>
  );

  return (
    <div className={styles.shelfContainer}>
      {isMobile && shelfHeader}

      {books.length === 0 && (
        <div className={styles.emptyState}>
          <img src={frog} alt="No books" className={styles.emptyImage} />
        </div>
      )}

      {books.length > 0 && (
        <div className={styles.shelf}>
          {books.map((book, index) => (
            <div
              key={book.id}
              className={styles.shelfItem}
              style={{ animationDelay: `${index * 0.03}s` }}
              onClick={() => handleBookClick(book)}
            >
              {book.thumbnail ? (
                <img
                  src={book.thumbnail}
                  alt={book.title}
                  className={styles.shelfThumbnail}
                />
              ) : (
                <div className={styles.noThumnail}>
                  <span>{book.title}</span>
                </div>
              )}

              {book.status === "reading" && typeof book.progress === "number" && (
                <svg className={styles.progressCircle} viewBox="0 0 36 36">
                  <path
                    className={styles.circleBg}
                    d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                  />
                  <path
                    className={styles.circleProgress}
                    strokeDasharray={`${book.progress * 100}, 100`}
                    d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                  />
                </svg>
              )}

              {book.status === "finished" && (
                <div className={styles.finishedBadge}>
                  <img src={checkIcon} alt="Finished" />
                </div>
              )}

              {book.status === "abandoned" && (
                <div className={styles.abandonedBadge}>
                  <img src={closeIcon} alt="Abandoned" />
                </div>
              )}
            </div>
          ))}
        </div>
      )}

      {!isMobile && shelfSidebar}
    </div>
  );
}