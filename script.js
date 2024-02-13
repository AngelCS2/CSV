function showMessage(isYes) {
    const messageContainer = document.getElementById('messageContainer');

    if (isYes) {
        messageContainer.innerText =  "Te iubescc mult draga mea iubii bubii,si aveam incredere ca vei accepta,sa stii ca iti multumesc pentru toate aceste sentimente nou create in mine pentru prima oara vreodata,nu am avut atata incredere in nimeni asa cum am in tine, m-am indragostit de tine foarte repede,de parca asa ar fii trebuit din totdeauna,aveam dubiile mele fiind tradat cu cateva zile inainte sincer nu voiam nimic, nu fiind sad just fed up dar crede ma ca asa au venit toate aceste sentimente in mine ca o furtuna de emotii pictandu mi lumea mea monotona ai aparut tu,mi-ai dat speranta ca exista si fericire in lume, fiind prima fata care m-a tratat asa si iubit cu adevarat mi-ai dat speranta ca am un viitor,acela fiind alaturi de tine,formand o familie impreuna si fiind fericiti train modest. Nu sunt fat-frumos si uneori simt ca nu te merit thats why i'll try my best to create a body only u shall touch iubire.Nu prea ma pricep la coding acesta fiind primul proiect sa i zic asa official dar sper sa nu ma fac de rusine :( Vreau sa iti urez Happy Valentine's si sa ti spun ca te iubesc enorm de mult. Oricat te-am facut sa suferi va fii dublat in fericire in viitor,anii astia va fii mai greu but everything will work out, stiu asta!!";
    } else {
        messageContainer.innerText = "Daca vezi asta inseamna ca pana la urma am iesit castigator :)) dar cu ce pret. Imi pare rau pentru toate serile in care ne-am certat din cauza mea si a geloziilor mele, am o personalitate posesiva si controlativa stiu si mi pare rau ca te-am facut sa te simti asa cum te-ai simtit in acele serii, imi pare rau pt fiecare lacrima ce a cazut din ochisorul ingerasului meu si fiecare moment cand te-ai simtit in pericol/dezgustata sau speriata, vreau doar sa stii ca te iubesc enorm de mult si iti urez un posibil ultim happy valentine's impreuna avand in vedere ca citesti acest mesaj, ori asta ori......te tii de glume sau ai apasat doar de curiozitate, oricum ar fii sa stii ca TEIUBESCCCCCCCCC";
function hideButton(buttonToHide, otherButtonId) {
    const button = document.getElementById(buttonToHide);
    const otherButton = document.getElementById(otherButtonId);

    // Hide the button
    button.style.display = 'none';

    // Show the other button
    otherButton.style.display = 'block';
}
