export default {
    cities: {
      title: "In <b>citylines.co</b> we want to build the transport systems of the World's cities",
      search: "Saisissez un pays ou une ville",
      contributors: {
        one: '%(contributors)s contributeur',
        other: '%(contributors)s contributeurs',
        list: {
          title: 'Meilleurs contributeurs',
          total: 'Toujours',
          last_month: 'Mois dernier'
        }
      },
      support: 'Rejoignez notre',
      support_link: 'live chat room sur Gitter'
    },
    main: {
      log_in: 'Se connecter'
    },
    auth: {
      log_in_with_google: 'Se connecter avec Google',
      log_in_with_twitter: 'Se connecter avec Twitter',
      disclaimer: 'En vous connectant vous acceptez les',
      disclaimer_link: 'conditions contributeur',
      privacy_disclaimer: 'et la',
      privacy_disclaimer_link: 'politique de confidentialité'
    },
    cookie_notice: {
      notice: 'Ce site utilise des cookies. Si vous continuez à utiliser ce site, vous acceptez notre politique sur les cookies.',
      accept: 'Accepter',
      info: 'Informations sur la politique sur les cookies',
      text: {
        title: 'Notre politique sur les cookies',
        p1: 'Cookies are small pieces of information that are stored in your web browser and that can be accessed by one or several websites.',
        p2: 'Citylines.co uses own and third-party cookies with the purpose of improving the user experience. We use own cookies to remember which user has logged in and to know whether the user has pressed or not the Accept button in the cookies banner. Regarding the third-party cookies, Google uses cookies in this website to store information related to the Google Login and to Google Analytics. All these cookies are persistent and are used only with the described scope.',
        p3: 'You can disable the cookies in this website, but this could affect certain features of Citilines.co.',
        p4: 'You can find more information about cookies at <a target="_blank" class="c-link" href="http://www.aboutcookies.org">aboutcookies.org</a>, including guides on how to see which cookies are installed in your browser, or how to uninstall them.'
    }
  },
  city: {
    edit: 'Modifier',
    stop_editing: 'Arrêter de modifier',
    lines: 'Lignes',
    km_operative: 'En exploitation : %(km)s km',
    km_under_construction: 'En construction: %(km)s km',
    all_lines: "Toutes les lignes",
    popup: {
      station: 'Station %(name)s',
      track: 'Informations sur la voie',
      buildstart: 'Début de construction : %(year)s',
      opening: 'Ouverture : %(year)s',
      closure: 'Fermeture : %(year)s',
      length: 'Longueur approximative : %(km)s km'
    }
  },
  editor: {
    edit_features: 'Modifier les éléments',
    edit_lines: 'Modifier les lignes',
    feature_viewer: {
      selected_feature: 'Éléments sélectionnés',
      no_feature_selected: 'Aucun élément sélectionné',
      fields: {
        klasses_id: {
          section: 'Id de la voie :%(id)s',
          station: 'Id de la station :%(id)s'
        },
        line: 'Ligne',
        name: 'Nom',
        opening: 'Ouverture',
        buildstart: 'Début de construction',
        closure: 'Fermeture',
        osm_id: 'Id OSM',
        osm_tags: 'Tags OSM'
      }
    },
    modified_features: {
      title: 'Éléments modifiés',
      no_features_modified: 'Aucun élément modifié',
      types: {
        geo: '(Geo)',
        props: '(Props)',
        created: '(Créé)',
        removed: '(Supprimé)'
      },
      klasses: {
        section: 'Voie',
        station: 'Station'
      },
      save: 'Enregistrer',
      discard: 'Annuler',
      too_many_elements: "Trop d'éléments ! Vous ne pouvez pas enregistrer plus de 20 éléments à la fois"
    },
    lines_editor: {
      create: 'Créer',
      new_line_placeholder: 'Nouvelle ligne',
      new_system_placeholder: 'Nouveau system',
      unnamed_system: 'Système sans nom',
      save: 'Enregistrer',
      delete: 'Supprimer',
      are_you_sure: 'Êtes-vous sûr ?',
      yes: 'Oui',
      no: 'Non'
    },
    osm: {
      zoom: "L'import n'est autorisé qu'à partir du niveau de zoom 13",
      import_button: 'Importer',
      relation: 'Relation',
      members: 'Membres:',
      ways: 'chemins',
      nodes: 'nœuds avec'
    },
    no_lines_alert: "Il n'y a aucune ligne. Les éléments doivent être associés à une ligne avant d'être enregistrés"
  },
  terms: {
    title: 'Conditions d utilisation',
    license: {
      title: 'License',
      p1: "Citylines.co is <i>open data</i> licensed under the <a class='c-link' href='http://opendatacommons.org/licenses/odbl/1.0/' target='_blank'> Open Database License</a> (ODbL). Any rights in individual contents of the database are licensed under the <a href='http://opendatacommons.org/licenses/dbcl/1.0/' target='_blank' class='c-link'>Database Contents License</a> (DbCL).",
      p2: "You can find a summary of the ODbL license <a href='https://opendatacommons.org/licenses/odbl/summary/' target='_blank' class='c-link'>here</a>."
    },
    contributor: {
      title: 'Contributor terms',
      p1: 'Your contribution should not infringe the intellectual property rights of anyone else. When you contribute any content you are indicating that you have the right to authorize Citylines.co to use and distribute it under our current license terms.',
      p2: 'You hereby grant to Citylines.co a licence to do any act that is restricted by copyright, database right or any related right over anything within the contents you contributed.',
      p3: 'Citylines.co agrees that it may only use or sub-license the content you contributed as part of a database and only under the terms of the ODbL 1.0 license for the database and DbCL 1.0 license for the individual contents of the database.'
    },
    privacy: {
      title: 'Politique de confidentialité',
      p1: 'Citylines.co collects your name, surname, email and screen name (if applicable), which are retrieved from the authentication system when you log in using Google or Twitter.',
      p2: 'Citylines.co stores this data in a secured private database.',
      p3: 'Citylines.co uses your information only for authentication purposes or to send you emails occasionally.',
      p4: 'Citylines.co won’t share your information with no one else.',
      p5: 'You can ask Citylines.co, at any time, to delete your personal information from it’s database.'
    }
  },
  data: {
    short_title: 'Données',
    title: "Nos données sont libres",
    download: "Télécharger",
    license: "Les informations stockées dans la base de données <b>citylines.co</b> sont sous <a class='c-link' href='http://opendatacommons.org/licenses/odbl/1.0/' target='_blank'> License Open Database</a> (ODbL)",
    see_terms_1: "Voir les",
    see_terms_2: "conditions d'utilisation",
    cities: 'Villes',
    systems: 'Systèmes',
    lines: 'Lignes',
    features: 'Voies',
    stations: 'Stations'
  },
  user: {
    my_cities: 'Mes villes',
    cities_of_user: 'Villes de %(name)s',
    table: {
      city: 'Ville',
      created_km: 'Km créés',
      created_stations: 'Stations créées',
      modified_or_deleted_elements: 'Éléments modifiés ou supprimés',
      caption: 'Les villes sont triées par km et nombre d élémetns modifiés'
    },
    you_never_contributed: "Vous n'avez contribué à aucune ville pour le moment !",
    user_never_contributed: "%(name)s n'a contribué à aucune ville pour le moment",
    see_cities: 'Voir les villes'
  }
}
