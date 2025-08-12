
window.addEventListener('click', () => {
  const video = document.getElementById('musique');
  video.muted = false; // active le son après un clic
  video.play(); });
window.onload = () => {
    const container = document.getElementById('container');
    const titre = document.getElementById('titre');
    const texte = document.getElementById('texte');
    const texteMot = "Ahlala Ninouuu, mon petit doudou d'amour, ma Ny Ary ! Je ne sais pas trop quoi te dire, je t'avoue, mis à part que je te souhaite tout le bonheur du monde et que tu gardes ton beau sourire toute ta vie. Tu mérites tout le bonheur du monde, car je sais que tu es une bonne personne, Ny Ary. Tu es la plus belle et la plus gentille des personnes que je connaisse. Je dois l’avouer, tu es drôle. Ta présence est tellement apaisante et chaleureuse pour moi, j’aimerais t’avoir pour moi toute ma vie et pouvoir te serrer dans mes bras. Tu es ma plus belle rencontre Ny Ary, je suis heureux avec toi. Bref, Ny Ary, je t’aime sincèrement !";
    const bouton = document.getElementById('bouton')
// 1. Cacher tout au départ
container.style.opacity = '0';
titre.style.opacity = '0';
texte.style.opacity = '0';


setTimeout(() => {
    container.style.opacity = "1";
  }, 3000); } ; 


  setTimeout(() => {
    titre.style.opacity = "1";
  }, 4500); 
 
  setTimeout(() => {
    texte.style.opacity = "1";
  }, 5500);  
  setTimeout(() => {
    bouton.style.opacity = "1";
  }, 8000) ; 

