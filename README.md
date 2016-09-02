Décider mes impôts
==================

Vision
------

Une application web pour orienter le type d'actions que je souhaite que mes impôts financent.


Objectif primaire
-----------------

Faire prendre conscience aux citoyen·ne·s français de leur pouvoir direct sur les politiques publiques.


Objectifs secondaires
---------------------

- Rééquilibrer la puissance médiatique en renforçant la capacité de financement des partis politiques peu médiatisés.
- Renforcer la capacité d'action des associations à but non lucratif.
- Démontrer (ou pas) que les citoyen·ne·s sont prêts à contribuer à l'action publique, même si cela leur coûte plus cher, à partir du moment où on les rend directement partie prenante du processus.
- Outiller les politiques défendant une participation accrue des citoyen·ne·s.


Moyens
------

- Exploiter la [déduction fiscale](https://www.service-public.fr/particuliers/vosdroits/F426) ([article 200](https://www.legifrance.gouv.fr/affichCode.do?idSectionTA=LEGISCTA000006191957&cidTexte=LEGITEXT000006069577) du code général des impôts) applicable aux dons aux associations à but non lucratif : une partie des dons est déduite du montant à payer. Cela signifie que tout contribuable peut décider de privilégier le type d'actions menées par une association par rapport à sa contribution au budget des politiques publiques sur lesquelles son seul moyen d'action est le vote sur le [Projet de Loi de Finances](https://fr.wikipedia.org/wiki/Loi_de_finances_en_France) par le biais de la représentation parlementaire.
- Rendre lisible la répartition du budget de l'État, catégoriser les associations selon la même répartition, et proposer un mix de dons permettant à l'utilisateur de concrétiser sa répartition idéale d'impôts.


Contraintes
-----------

- Catégoriser la répartition du budget d'une association est long et coûteux. Le crowdsourcing semble la seule manière viable de compléter ces répartitions de manière fine. Il faudra donc déterminer un processus de complétion et de contrôle qui passe à l'échelle.
- La déduction fiscale se fait dans la limite de 20 % du revenu imposable. Néanmoins, pour que l'impôt sur le revenu atteigne 20 % du revenu imposable, il faut avoir gagné plus de 56 446 € imposables annuels par part. La grande majorité des contribuables (au moins 78 %) peut donc déterminer la destination de l'intégralité de son impôt sur le revenu.

> Source des 56 446 € / part : calcul fait dans `computeTax.js` en calculant l'impôt selon le [barème](http://www.impots.gouv.fr/portal/dgi/public/popup?espId=0&typePage=cpr02&docOid=documentstandard_6117) en itérant euro par euro.
>
> Source des 81 % : [statistiques nationales 2015 de la DGFiP](http://www2.impots.gouv.fr/documentation/statistiques/ircom2015/ir2015.htm).
> Nombre de foyers fiscaux imposés dont le RFR est inférieur à 50k€ : 13 257 825.
> Nombre de foyers fiscaux imposés dont le RFR est supérieur à 50k€ : 3 767 066.
> Le net imposable est [par définition](http://www2.impots.gouv.fr/documentation/statistiques/ircom2015/notice_explicative.pdf) inférieur ou égal au RFR, et le foyer fiscal ne peut avoir moins d'une tranche. Il est donc certain que tous les foyers fiscaux de RFR ≤ 50k€ sont imposés à moins de 20 % du revenu imposable. Il est également fort probable que la majorité des foyers de RFR ≥ 50k€ soient eux-mêmes imposés à moins de 20 % du revenu imposable, mais on ne peut pas en être certain.
> On fait donc le ratio (foyers de RFR ≤ 50k€) / (nombre total de foyers) = 13 257 825 / 17 024 891 = 77,87%.


Licence
-------

- Contenu textuel : [CC-BY-NC-SA](https://creativecommons.org/licenses/by-nc-sa/3.0/).
- Code : [AGPLv3](https://www.gnu.org/licenses/agpl-3.0.fr.html).
