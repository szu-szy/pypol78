## JS API - 03.02 Zadania

1. GET
- utwórz funkcje fetchData która pobiera liste produktów i wypisuje tablice elementów w konsoli

2. PUT
- utwórz funkcje updateData która aktualizuje nazwe produktu i wynik wyswietla w konsoli

3. POST
- utwórz funkcje która tworzy nowy produkt i wyswietla alert z nowo utworzonym produktem dzieki metodzie "alert('')"

4. DELETE
- usuń dowolny produkt z zakresu 1-100 i wyswietl usuniety produkt w konsoli

# Zadania DOM

1. utwórz pusta liste <ul> w pliku index.html i nadaj mu odpowiednie ID
- Utwórz funkcje która tworzy liste 5 elementów z tablicy zdefiniowanej oraz przypisanej do zmiennej "list"
- utwórz przycisk "generuj liste" z ID
- pobierz element w index.js
- nadaj event listener na ten przycisk tak aby po wcisnieciu wywolywalo nam funkcje generowania listy

2. Do generowanego elementu listy dodaj przycisk "usun" który bedzie mial przypisany event listener do usuwania aktualnego elementu

3. Utwórz formularz który przechwytuje 4 pola (dowolne) i nadaj mu ID
- pobierz formularz w index.js
- utwórz funkcje która pobiera wszystkie wybrane pola i wyswietla je w konsoli
- dodaj event listener na formularzu który wywoluje funkcje z pobieraniem danych

# Zadania fetch
1. stworz przycisk do pobierania danych
napisz funkcje za pomoca metodych fetch do pobierania listy uzytkownikow
lista uzytkownikow powinna wyswietlic sie w konsoli po wcisnieciu przycisku
aby to sie wykonalo musimy dodac event listener do przycisku na event click

2. stworz formularz z input o typie number do wybrania id uzytkownika z zakresu 1-100
stworz funkcje do pobierania pojedynczego uzytkownika
przypisz do formularza utworzona funkcje
po wcisnieciu przycisku submit powinno nam wyswietlic uzytkownika w konsoli

3. stworz formularz ktory bedzie aktualizowal firstName oraz lastName uzytkownika
formularz bedzie zawieral 3 inputy (okresla id, imie, nazwisko) oraz przycisk
input od id powinien byc sprawdzany (min=1, max=100)
napisz funkcje ktora pobiera dane z formularza oraz aktualizuje wybranego uzytkownika
przypisz funkcje jako event listener do formularza

4. stworz formularz do utworzenia nowego uzytkownika
stworz funkcje ktora bedzie pobierac pola z formularza i tworzyc na ich bazie nowego uzytkownika w bazie
po utworzeniu dajmy alert dla uzytkownika o nowym produkcie
pamietamy o sprawdzeniu czy dane nie sa puste
dodajemy event listener do formularza z referencja funkcji

## Zadanie podsumowujące
1. Strona firmy spożywczej
- Celem tego zadania jest zaprojektowanie i stworzenie strony internetowej dla nowo powstającej firmy spożywczej

Wymagane Podstrony:
- Header
* Przyciski nawigacyjne lub menu do innych podstron.

- Strona Główna (Home):

* Powinna zawierać przyciągające uwagę zdjęcia lub slajdy prezentujące różnorodność produktów firmy.
* Krótki opis firmy i jej misji.

- Produkty (Products):

* Katalog produktów (pobierana lista z bazy).
* kazdy produkt posiada przycisk aby wyswietlic szczegóły.
* Możliwość filtrowania produktów według nazwy.

- Kontakt (Contact):

* Formularz kontaktowy dla szybkich zapytań (obsługa za pomoca JS wyswietla alert z danymi formularza)
* Dane kontaktowe: adres firmy, numer telefonu, adres e-mail.

- O Nas (About Us):

* Historia firmy, jej wartości i filozofia działania.
* Lista personelu (z bazy) oraz możliwowść rozwiniecia szczegołów o pracowniku 
* krótkie biografie kluczowych członków.
* Informacje o certyfikatach jakości, nagrodach, lub innych osiągnięciach.

- Footer:
* linki do privacy policy oraz regulaminu
* logo/nazwa firmy


- Dodatkowe Wymogi:
* Responsywność: Strona musi być przystosowana do wyświetlania na różnych urządzeniach (komputery stacjonarne, laptopy, tablety, smartfony).

------

## Zadanie podsumowujące

Opis zadania:
Twoim zadaniem jest stworzenie strony internetowej, która będzie stanowić wirtualne portfolio zawierające informacje o Tobie jako specjaliście w danej dziedzinie. Strona powinna zawierać sekcje takie jak: o mnie, umiejętności, projekty, kontakt.

Wymagania projektowe:

# 1. Struktura strony:
   Nagłówek z Twoim imieniem lub tytułem zawodowym.
   Sekcja "O mnie" zawierająca krótki opis Twojego doświadczenia zawodowego, zainteresowań i celów zawodowych.
   Sekcja "Umiejętności" prezentująca listę Twoich głównych umiejętności lub technologii, którymi się posługujesz.
   Sekcja "Projekty" z miniaturami lub linkami do projektów, które stworzyłeś lub w których brałeś udział.
   Stopka zawierająca informacje kontaktowe, takie jak adres e-mail, numer telefonu i linki do profili społecznościowych.

# 2. Elementy HTML do wykorzystania:
   Nagłówki (<h1>, <h2>, itd.) do tytułowania sekcji.
   Znaczniki <p> do opisów w sekcji "O mnie" oraz do prezentacji umiejętności.
   Znaczniki list (<ul>, <li>) do prezentacji umiejętności w sposób listy.
   Znaczniki <img> lub <a> do prezentacji projektów.
   Znacznik <footer> do umieszczenia informacji kontaktowych w stopce.

# 3. Dodatkowe uwagi:
   Zadbaj o czytelność i estetykę strony.
   Użyj atrybutów alt w znacznikach <img> dla lepszej dostępności.
   Zastosuj podstawowe style CSS dla poprawienia wyglądu strony.

Dodatkowe uwagi:
Strona powinna być przejrzysta, zawierać istotne informacje dotyczące Twojego doświadczenia i umiejętności oraz być przyjazna dla użytkownika. To podstawowe portfolio, które może być później rozwijane i rozbudowywane o bardziej zaawansowane funkcje.

## Zad 2

Zadanie praktyczne: Prosty kalkulator
Twoim zadaniem jest stworzenie prostego kalkulatora za pomocą HTML, CSS. Kalkulator powinien umożliwiać użytkownikowi wykonywanie prostych operacji arytmetycznych (dodawanie, odejmowanie, mnożenie, dzielenie).

Wymagania:
Interfejs użytkownika:

Stwórz prosty interfejs za pomocą HTML i CSS, zawierający pola do wprowadzania liczb oraz przyciski do operacji matematycznych (dodawania, odejmowania, mnożenia, dzielenia i równości).
Wyświetl wynik działania na ekranie kalkulatora.

## blog
Twoim zadaniem jest stworzenie prostej strony bloga wykorzystując tylko HTML. Strona ta ma na celu prezentację artykułów na wybrany przez Ciebie temat. Struktura bloga powinna zawierać następujące elementy:

Nagłówek (Header): Zawiera tytuł bloga i opcjonalnie krótki slogan lub podtytuł. Użyj znaczników <header>, <h1> i <p>.

Menu Nawigacyjne: Prosta nawigacja z linkami do głównych sekcji bloga, takich jak Strona Główna, O mnie, Kontakt. Użyj listy nieuporządkowanej <ul> z elementami <li> i linkami <a> wewnątrz (nawet jeśli będą one prowadzić do #, ponieważ skupiamy się tylko na HTML).

Sekcja Artykułów: Główna część strony, gdzie będą prezentowane artykuły. Każdy artykuł powinien zawierać tytuł (<h2>), datę publikacji (<p> z odpowiednią klasą lub id), autora (<p>), i treść (<p>). Użyj semantycznego znacznika <article> dla każdego artykułu.

Sidebar (Pasek Boczny): Sekcja z dodatkowymi informacjami, takimi jak krótkie bio autora, najnowsze posty lub kategorie artykułów. Możesz użyć <aside> do zaznaczenia tego, że jest to treść poboczna względem głównej zawartości.

Stopka (Footer): Stopka zawierająca informacje prawne, prawo autorskie i/lub linki do mediów społecznościowych. Użyj znacznika <footer> i umieść w nim odpowiedni tekst i linki.

// CSS
