// Définir la classe Livre
class Livre {
    constructor(titre, auteur, anneePublication, ISBN) {
      this.titre = titre;
      this.auteur = auteur;
      this.anneePublication = anneePublication;
      this.ISBN = ISBN;
    }
  }
  
  // Définir la classe Bibliotheque
  class Bibliotheque {
    constructor() {
      this.livres = [];
    }
  
    // Méthode pour ajouter un livre à la bibliothèque
    ajouterLivre() {
      this.livres.push(livre);
      console.log(`Le livre "${livre.titre}" a été ajouté à la bibliothèque.`);
    }
  
    // Méthode pour retirer un livre de la bibliothèque en fonction de son ISBN
    retirerLivre(ISBN) {
      this.livres = this.livres.filter(livre => livre.ISBN !== ISBN);
      console.log(`Le livre avec ISBN ${ISBN} a été retiré de la bibliothèque.`);
    }
  
    // Méthode pour chercher un livre dans la bibliothèque en fonction de son ISBN
    chercherLivre(ISBN) {
      const livreRecherche = this.livres.find(livre => livre.ISBN === ISBN);
      if (livreRecherche) {
        console.log(`Livre trouvé : ${livreRecherche.titre} par ${livreRecherche.auteur}`);
      } else {
        console.log(`Aucun livre trouvé avec ISBN ${ISBN}.`);
      }
    }
  
    // Méthode pour afficher la liste de tous les livres présents dans la bibliothèque
    listeLivres() {
      console.log("Liste des livres dans la bibliothèque :");
      this.livres.forEach(livre => console.log(`- ${livre.titre} par ${livre.auteur}`));
    }
  }
  
  // Créer des instances de la classe Livre
  const livre1 = new Livre("Titre1", "Auteur1", 2020, "ISBN1");
  const livre2 = new Livre("Titre2", "Auteur2", 2019, "ISBN2");
  
  // Créer une instance de la classe Bibliotheque
  const bibliotheque = new Bibliotheque();
  
  // Tester les différentes fonctionnalités
  bibliotheque.ajouterLivre(livre1);
  bibliotheque.ajouterLivre(livre2);
  bibliotheque.listeLivres();
  bibliotheque.retirerLivre("ISBN1");
  bibliotheque.listeLivres();
  bibliotheque.chercherLivre("ISBN2");
  