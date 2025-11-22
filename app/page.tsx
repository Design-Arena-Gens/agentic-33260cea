const sections = [
  {
    title: "Étape 1 · Préparer le dossier",
    description:
      "Rassemblez toutes les informations factuelles relatives au cas pour sécuriser la traçabilité et la conformité réglementaire.",
    items: [
      "Identité complète du salarié (nom, prénom, poste, unité, ancienneté).",
      "Date de déclaration de la maladie professionnelle et numéro de dossier CPAM.",
      "Description synthétique de la pathologie reconnue ou suspectée.",
      "Historique des postes occupés, expositions identifiées et durées associées.",
      "Résultats médicaux, avis du médecin du travail, restrictions temporaires ou permanentes."
    ]
  },
  {
    title: "Étape 2 · Analyser la situation de travail",
    description:
      "Apportez un regard structuré sur les conditions d'exposition du salarié pour objectiver les faits présentés au management.",
    items: [
      "Cartographier les tâches quotidiennes et les gestes répétitifs.",
      "Identifier les produits, agents ou contraintes physiques incriminés.",
      "Documenter les mesures de prévention déjà en place et leur efficacité réelle.",
      "Collecter les témoignages (collègues, encadrants, représentants du personnel).",
      "Mettre en évidence les écarts éventuels avec les procédures ou consignes."
    ]
  },
  {
    title: "Étape 3 · Structurer le rapport hiérarchique",
    description:
      "Respectez une logique claire pour faciliter la validation rapide du rapport et son exploitation par les différentes parties prenantes.",
    items: [
      "Page de garde avec objet, référence du salarié, date et rédacteur.",
      "Résumé exécutif (10 lignes maximum) présentant le cas et la décision attendue.",
      "Développement en quatre blocs : Contexte, Analyse des risques, Mesures existantes, Recommandations.",
      "Conclusion avec décision proposée, échéancier et responsables désignés.",
      "Liste des annexes et documents justificatifs."
    ]
  },
  {
    title: "Étape 4 · Vérifier la conformité réglementaire",
    description:
      "Assurez-vous que le rapport respecte les obligations légales et conventionnelles pour éviter des retours ou contentieux.",
    items: [
      "Référence aux articles du Code du travail applicables (L.461-6, R.461-9, etc.).",
      "Mention systématique de la consultation du médecin du travail et du CSE/CSSCT.",
      "Traçabilité des décisions précédentes prises pour le même salarié (aménagements, reclassements).",
      "Alignement avec les procédures internes déclarées auprès de la CPAM et de l'Inspection du travail.",
      "Validation du volet confidentialité (RGPD) pour toutes les données médicales."
    ]
  }
];

const validationChecklist = [
  "Le résumé exécutif résume la situation, les parties prenantes et la décision demandée.",
  "La chronologie des faits est cohérente, sourcée et datée.",
  "Les données chiffrées (taux d'absences, expositions, coûts) sont vérifiées et mises à jour.",
  "Les mesures préventives proposées sont réalisables, budgétées et affectées.",
  "Le rapport mentionne les consultations obligatoires (médecin du travail, CSE, RH).",
  "Les annexes sont indexées et correspondent aux références dans le corps du texte."
];

const annexes = [
  {
    label: "Fiche d'exposition ou DUERP",
    details: "Documenter précisément les agents dangereux, intensités et durées d'exposition."
  },
  {
    label: "Avis du médecin du travail",
    details: "Inclure les restrictions, préconisations et l'échéance de suivi."
  },
  {
    label: "Compte rendu d'entretien avec le salarié",
    details: "Retranscrire fidèlement la perception du salarié et ses demandes."
  },
  {
    label: "Historique des actions de prévention",
    details: "Lister les actions correctives déjà menées, leurs dates et leur efficacité."
  }
];

export default function Page() {
  return (
    <main>
      <section className="mb-12 rounded-3xl border border-primary-100 bg-white p-10 shadow-sm">
        <div className="flex flex-col gap-6">
          <div>
            <span className="inline-block rounded-full bg-primary-100 px-4 py-1 text-sm font-semibold text-primary-700">
              Procédure interne
            </span>
          </div>
          <h1 className="text-4xl font-bold text-slate-900 lg:text-5xl">
            Guide complet pour rédiger un rapport hiérarchique lié aux maladies
            professionnelles
          </h1>
          <p className="max-w-3xl text-lg text-slate-600">
            Utilisez ce guide opérationnel pour documenter, analyser et faire
            valider un dossier de maladie professionnelle. Chaque étape vous
            aide à produire un rapport structuré, conforme aux exigences légales
            et utile pour la prise de décision.
          </p>
          <div className="grid gap-4 text-sm text-slate-600 md:grid-cols-3">
            <div className="rounded-2xl border border-slate-200 p-4">
              <p className="text-xs uppercase tracking-widest text-primary-600">
                Public cible
              </p>
              <p>Managers, RRH, référents santé & sécurité, membres CSSCT.</p>
            </div>
            <div className="rounded-2xl border border-slate-200 p-4">
              <p className="text-xs uppercase tracking-widest text-primary-600">
                Objectif
              </p>
              <p>
                Formaliser une synthèse factuelle permettant d&apos;arbitrer les
                mesures d&apos;aménagement ou de reclassement.
              </p>
            </div>
            <div className="rounded-2xl border border-slate-200 p-4">
              <p className="text-xs uppercase tracking-widest text-primary-600">
                Durée moyenne
              </p>
              <p>Entre 3 et 5 jours ouvrés selon la complexité du dossier.</p>
            </div>
          </div>
        </div>
      </section>

      <div className="space-y-10">
        {sections.map((section) => (
          <article
            key={section.title}
            className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm"
          >
            <h2 className="text-2xl font-semibold text-slate-900">
              {section.title}
            </h2>
            <p className="mt-3 text-slate-600">{section.description}</p>
            <ul className="mt-6 space-y-3 text-slate-700">
              {section.items.map((item) => (
                <li key={item} className="flex gap-3">
                  <span className="mt-1 inline-flex h-2.5 w-2.5 flex-none rounded-full bg-primary-500" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </article>
        ))}
      </div>

      <section className="mt-12 grid gap-8 lg:grid-cols-[2fr,1fr]">
        <article className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
          <h2 className="text-2xl font-semibold text-slate-900">
            Architecture recommandée du rapport
          </h2>
          <div className="mt-6 space-y-6 text-slate-700">
            <div>
              <h3 className="font-semibold text-primary-700">1. Page de garde</h3>
              <p>
                Mentionnez le titre du rapport, l&apos;identité du salarié, la
                fonction du rédacteur, la date d&apos;émission et les versions
                successives.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-primary-700">
                2. Résumé exécutif
              </h3>
              <p>
                Synthétisez en un paragraphe la situation, les enjeux sociaux et
                financiers, ainsi que la décision attendue (validation d&apos;un
                aménagement, reclassement, financement d&apos;études complémentaires,
                etc.).
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-primary-700">
                3. Analyse détaillée
              </h3>
              <ul className="mt-2 space-y-2">
                <li>
                  <strong>Contexte :</strong> rappel du parcours professionnel,
                  des incidents antérieurs et des expositions déclarées.
                </li>
                <li>
                  <strong>Analyse des risques :</strong> identification des
                  postes, procédés et agents pathogènes.
                </li>
                <li>
                  <strong>Mesures déjà mises en œuvre :</strong> actions de
                  prévention, formations dispensées, résultats de campagnes de
                  métrologie.
                </li>
                <li>
                  <strong>Recommandations :</strong> actions correctives à court,
                  moyen et long terme, coûts estimés et responsables désignés.
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-primary-700">
                4. Plan d&apos;action et suivi
              </h3>
              <p>
                Définissez les jalons, dates de revue, indicateurs de suivi
                (taux d&apos;absentéisme, nombre d&apos;accidents, satisfaction du
                salarié) et modalités de reporting.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-primary-700">5. Annexes</h3>
              <p>
                Intégrez les documents justificatifs pour permettre un audit
                rapide par la hiérarchie, les instances représentatives ou les
                autorités externes.
              </p>
            </div>
          </div>
        </article>

        <aside className="flex flex-col gap-6">
          <article className="rounded-3xl border border-primary-200 bg-primary-50 p-6 shadow-sm">
            <h2 className="text-xl font-semibold text-primary-800">
              Check-list de validation
            </h2>
            <ul className="mt-4 space-y-3 text-sm text-primary-900">
              {validationChecklist.map((item) => (
                <li key={item} className="flex gap-2">
                  <span className="mt-1 inline-flex h-2 w-2 flex-none rounded-full bg-primary-600" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </article>

          <article className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
            <h2 className="text-xl font-semibold text-slate-900">
              Pièces jointes à préparer
            </h2>
            <ul className="mt-4 space-y-4 text-sm text-slate-700">
              {annexes.map((annexe) => (
                <li key={annexe.label}>
                  <p className="font-semibold text-slate-900">{annexe.label}</p>
                  <p>{annexe.details}</p>
                </li>
              ))}
            </ul>
          </article>
        </aside>
      </section>

      <section className="mt-12 rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
        <h2 className="text-2xl font-semibold text-slate-900">
          Circuit de validation recommandé
        </h2>
        <div className="mt-6 grid gap-6 lg:grid-cols-4">
          {[
            {
              step: "1. Manager direct",
              details:
                "Relit le rapport, complète les observations opérationnelles et confirme la faisabilité terrain."
            },
            {
              step: "2. Ressources humaines",
              details:
                "Valident la conformité juridique et consolident les impacts RH (mobilité, formations, indemnisations)."
            },
            {
              step: "3. Médecin du travail",
              details:
                "Apprécie l'adéquation des propositions avec l'état de santé et l'obligation de sécurité."
            },
            {
              step: "4. Direction",
              details:
                "Arbitre les investissements, valide le calendrier et suit la mise en œuvre des engagements."
            }
          ].map((item) => (
            <div key={item.step} className="rounded-2xl border border-slate-200 p-5">
              <p className="text-sm font-semibold text-primary-700">{item.step}</p>
              <p className="mt-2 text-sm text-slate-600">{item.details}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mt-12 rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
        <h2 className="text-2xl font-semibold text-slate-900">
          Modèle de synthèse à adapter
        </h2>
        <div className="mt-6 overflow-x-auto">
          <table className="w-full min-w-[640px] border-collapse text-left text-sm text-slate-700">
            <thead>
              <tr className="bg-slate-100 text-slate-900">
                <th className="border border-slate-200 px-4 py-3">Section</th>
                <th className="border border-slate-200 px-4 py-3">Contenu attendu</th>
                <th className="border border-slate-200 px-4 py-3">Responsable</th>
              </tr>
            </thead>
            <tbody>
              {[
                {
                  section: "Résumé exécutif",
                  contenu:
                    "Situation du salarié, enjeu principal, décision sollicitée et échéance de réponse.",
                  responsable: "Manager + RRH"
                },
                {
                  section: "Analyse des expositions",
                  contenu:
                    "Postes occupés, agents ou gestes incriminés, mesures existantes et évaluations.",
                  responsable: "Service Prévention / HSE"
                },
                {
                  section: "Impacts organisationnels",
                  contenu:
                    "Conséquences sur la production, besoins d'intérim, adaptations des plannings.",
                  responsable: "Encadrement de proximité"
                },
                {
                  section: "Plan d'action proposé",
                  contenu:
                    "Actions à court terme, investissements requis, budgets, indicateurs de suivi.",
                  responsable: "Direction + Finance"
                }
              ].map((row) => (
                <tr key={row.section} className="odd:bg-white even:bg-slate-50">
                  <td className="border border-slate-200 px-4 py-3 font-semibold">
                    {row.section}
                  </td>
                  <td className="border border-slate-200 px-4 py-3">{row.contenu}</td>
                  <td className="border border-slate-200 px-4 py-3">{row.responsable}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <section className="mt-12 rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
        <h2 className="text-2xl font-semibold text-slate-900">
          Bonnes pratiques de présentation
        </h2>
        <ul className="mt-6 space-y-4 text-slate-700">
          {[
            "Limiter chaque section à deux pages maximum et privilégier les repères visuels (tableaux, chronologies).",
            "Utiliser un vocabulaire factuel, éviter les interprétations personnelles ou les diagnostics médicaux.",
            "Mettre en avant les bénéfices attendus pour le salarié et l'entreprise (réduction de l'absentéisme, conformité réglementaire).",
            "Prévoir une mise à jour du rapport après chaque décision ou événement majeur (reprise, rechute, nouvel avis médical).",
            "Archiver le rapport dans l'outil documentaire sécurisé de l'entreprise avec droits d'accès restreints."
          ].map((item) => (
            <li key={item} className="flex gap-3">
              <span className="mt-1 inline-flex h-2.5 w-2.5 flex-none rounded-full bg-primary-500" />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </section>

      <footer className="mt-12 rounded-3xl border border-slate-200 bg-white p-8 text-sm text-slate-600 shadow-sm">
        <p>
          Mettre à jour ce guide à chaque évolution réglementaire (tableaux des
          maladies professionnelles, jurisprudence) et l&apos;adapter aux
          procédures internes propres à votre organisation.
        </p>
        <p className="mt-3">
          Pour toute question, contactez votre référent Santé &amp; Sécurité ou
          le service juridique afin de sécuriser la décision hiérarchique.
        </p>
      </footer>
    </main>
  );
}
