"use strict";
(() => {
var exports = {};
exports.id = 51;
exports.ids = [51];
exports.modules = {

/***/ 3009:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ name_generator),
  "getStaticProps": () => (/* binding */ getStaticProps)
});

// EXTERNAL MODULE: external "@emotion/react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(5193);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: external "next-i18next"
var external_next_i18next_ = __webpack_require__(1377);
// EXTERNAL MODULE: external "next-i18next/serverSideTranslations"
var serverSideTranslations_ = __webpack_require__(5460);
// EXTERNAL MODULE: ./src/Page.tsx
var Page = __webpack_require__(6906);
// EXTERNAL MODULE: external "@mui/material/Grid"
var Grid_ = __webpack_require__(5612);
var Grid_default = /*#__PURE__*/__webpack_require__.n(Grid_);
// EXTERNAL MODULE: external "@mui/material/FormControl"
var FormControl_ = __webpack_require__(8891);
var FormControl_default = /*#__PURE__*/__webpack_require__.n(FormControl_);
// EXTERNAL MODULE: external "@mui/material/InputLabel"
var InputLabel_ = __webpack_require__(911);
var InputLabel_default = /*#__PURE__*/__webpack_require__.n(InputLabel_);
// EXTERNAL MODULE: external "@mui/material/Select"
var Select_ = __webpack_require__(2651);
var Select_default = /*#__PURE__*/__webpack_require__.n(Select_);
// EXTERNAL MODULE: external "@mui/material/MenuItem"
var MenuItem_ = __webpack_require__(9271);
var MenuItem_default = /*#__PURE__*/__webpack_require__.n(MenuItem_);
// EXTERNAL MODULE: external "@mui/material/Button"
var Button_ = __webpack_require__(3819);
var Button_default = /*#__PURE__*/__webpack_require__.n(Button_);
// EXTERNAL MODULE: ./src/Section.tsx
var Section = __webpack_require__(8884);
// EXTERNAL MODULE: external "@mui/material/Paper"
var Paper_ = __webpack_require__(1598);
var Paper_default = /*#__PURE__*/__webpack_require__.n(Paper_);
;// CONCATENATED MODULE: ./src/name-generator/MyNameIs.tsx



const MyNameIs = ({ name: name1  })=>{
    return /*#__PURE__*/ jsx_runtime_.jsx((Paper_default()), {
        variant: "outlined",
        sx: {
            m: {
                xs: 2,
                md: 4
            },
            p: {
                xs: 1,
                md: 2
            },
            fontSize: "1.75em",
            textAlign: "center",
            whiteSpace: "nowrap"
        },
        children: (Array.isArray(name1) ? name1 : [
            name1
        ]).map((name)=>/*#__PURE__*/ jsx_runtime_.jsx("div", {
                children: name
            })
        )
    });
};
/* harmony default export */ const name_generator_MyNameIs = (MyNameIs);

// EXTERNAL MODULE: external "@mui/material/Typography"
var Typography_ = __webpack_require__(7163);
var Typography_default = /*#__PURE__*/__webpack_require__.n(Typography_);
// EXTERNAL MODULE: external "@mui/material/TextField"
var TextField_ = __webpack_require__(6042);
var TextField_default = /*#__PURE__*/__webpack_require__.n(TextField_);
// EXTERNAL MODULE: external "@mui/material/Autocomplete"
var Autocomplete_ = __webpack_require__(2311);
var Autocomplete_default = /*#__PURE__*/__webpack_require__.n(Autocomplete_);
;// CONCATENATED MODULE: ./src/name-generator/NameAutocomplete.tsx




const NameAutocomplete = ({ options , sort , getOptionLabel , value: value1 , onChange , label ="Label" , placeholder ="Placeholder"  })=>{
    const handleChangeAutocomplete = (_, value)=>{
        onChange(value !== null ? value : "");
    };
    const handleChangeInput = (event)=>{
        onChange(event.target.value);
    };
    return /*#__PURE__*/ jsx_runtime_.jsx((Autocomplete_default()), {
        freeSolo: true,
        options: (sort !== undefined ? options.sort(sort) : options).filter((name, index, array)=>name !== array[index + 1]
        ),
        getOptionLabel: getOptionLabel,
        value: value1,
        inputValue: value1,
        onChange: handleChangeAutocomplete,
        renderInput: (params)=>/*#__PURE__*/ jsx_runtime_.jsx((TextField_default()), {
                ...params,
                variant: "outlined",
                onChange: handleChangeInput,
                label: label,
                placeholder: placeholder,
                autoComplete: "off",
                InputLabelProps: {
                    shrink: true
                }
            })
    });
};
/* harmony default export */ const name_generator_NameAutocomplete = (NameAutocomplete);

;// CONCATENATED MODULE: ./src/name-generator/ffxiv-name-generator/data/chara-make-names.json
const chara_make_names_namespaceObject = JSON.parse('{"NM":["Abraham","Albin","Aldous","Anselmet","Arthur","Augustine","Bayard","Belmont","Benedict","Beneger","Boyle","Bran","Bruce","Clerebold","Clifton","Clive","Colbert","Colson","Conphas","Cornell","Coster","Cyriac","Daimbert","Dalmas","Danyell","Deitrich","Denston","Derwin","Deryk","Eleazar","Emanuel","Erasmus","Erik","Esmond","Esmour","Esperaunce","Etgar","Frederyk","Geoffrey","Gerald","Gerbold","Guston","Gwayne","Gylbart","Halstein","Hewrey","Hoddyn","Humphrey","Johannes","Jonathas","Joseph","Kennard","Kerrich","Kinnison","Ladislas","Lambert","Laurence","Laurentius","Lodewicus","Lodwicke","Madison","Mainfroi","Mansel","Mathye","Mordyn","Morgant","Morys","Navarre","Noes","Olyver","Orisic","Orrick","Orwen","Osric","Powle","Raffe","Rauffe","Raulin","Ribald","Ricard","Rickeman","Roarich","Robyn","Roger","Rothe","Roundelph","Rowland","Rycharde","Samson","Sandre","Sigurdh","Simond","Talan","Templeton","Vannes","Voyce","Vyncent","Werner","Willielmus","Wineburg"],"iC":["Aeditha","Agnys","Airell","Aislinn","Alainne","Aldyet","Alicen","Allene","Amelia","Amice","Amphelice","Angelet","Anna","Audrye","Averil","Ayleth","Aylufa","Biddy","Braya","Carmen","Ceana","Cecilia","Chaele","Deidra","Diamanda","Eadburga","Eara","Eavan","Edalene","Edda","Edekin","Edhida","Edyva","Eilis","Eldid","Elfleda","Eluned","Emoni","Essylt","Etfled","Ethelinda","Everill","Fennella","Fhlae","Fiachre","Finnea","Fryswyde","Fuandrec","Garthrite","Gert","Geva","Ginnade","Gloiucen","Gloiumed","Glynnis","Godeleva","Goodife","Granae","Gudytha","Guencen","Guenguiu","Gylda","Hedheue","Hemin","Hida","Hildeyerd","Ianna","Ilcum","Imania","Jocea","Keaira","Keelty","Keitha","Lefchild","Lefleda","Lewena","Lina","Linyeve","Maeve","Meara","Meduil","Merewina","Meriel","Milburh","Mildthryth","Mirabelle","Motte","Mydrede","Nuala","Osgyth","Ositha","Ostrythe","Seburga","Sileas","Sungyve","Synnove","Theldry","Tieve","Urith","Wulfiue"],"Sc":["Abbey","Abel","Ackerman","Addock","Allen","Allond","Arkwright","Aubrey","Bagley","Ballard","Barker","Barlow","Bell","Bellveil","Berry","Bishop","Braddock","Brasher","Brewer","Broadbent","Brooks","Browne","Carmine","Carver","Clarke","Clay","Clayworth","Cooke","Corwell","Covey","Dorne","Dracht","Eugene","Fairclough","Fields","Fisher","Fletcher","Fulke","Gardner","Gelson","Glover","Goode","Goode","Goodfellow","Greave","Greene","Happer","Hill","Hodder","Holmes","Holt","Hunt","Jeanne","Kirk","Lannis","Leach","Leatherby","Lee","Little","Mason","Meath","Mercer","Miller","Moore","Morning","Newton","Nolan","North","Oswell","Piper","Poole","Potter","Reed","Rich","Rose","Sadler","Sawyer","Shepard","Slater","Smith","Southway","Spence","Stark","Tanner","Walker","Ward","Weaver","Webb","Weild","Wells","West","Wheeler","White","Winsome","Witte","Wright","Yaeger","Yar","Yarborough","Young"],"UZ":["Ancelot","Anshelm","Ansobert","Arcavius","Archembald","Archimbalt","Arenvald","Audouin","Autgar","Averitt","Berinhard","Bernier","Beroald","Berold","Berthar","Berwelf","Betyn","Edelstein","Ermenold","Ernold","Ernolf","Faramund","Fridebert","Gairovald","Gelfradus","Gelther","Gervesin","Gevehard","Giselberdus","Gundobald","Guntmar","Haribehrt","Hariwald","Heidolf","Heimart","Helfric","Helmhart","Hemmet","Hernais","Hewelin","Hewerald","Hremfing","Hroch","Hrodric","Hrodrich","Hrodulf","Hrotmar","Hrudolf","Hruodiger","Hruodland","Jofrid","Lambard","Lewenhart","Ligart","Meinfrid","Munifrid","Odibrand","Odinel","Ortolf","Ortwin","Otelin","Otho","Radulf","Rafold","Raganald","Raganfrid","Raginmund","Rand","Roric","Sewell","Shilgen","Sibold","Sidimund","Sifrid","Theodemar","Theodric","Theudobald","Thimm","Tyon","Ulta","Umfrey","Walahfrid","Walcher","Waldibert","Waldomar","Walhbert","Warenheri","Willahelm","Willamar","Willelm","Winebaud","Wiscard","Withekind","Wolkan","Wracwulf","Wultgar","Wunnihad","Wyat","Wymar","Wymund"],"qb":["Adala","Adalberta","Adalind","Adelena","Aebbe","Aelina","Aenor","Ahelissa","Albreda","Aldruth","Aleidis","Alesone","Alvered","Alyon","Alys","Amelot","Arlette","Athala","Atheleys","Auacyn","Auelin","Auriana","Aurildis","Aveis","Avekin","Avila","Avin","Baltelda","Balthildis","Berehta","Bergard","Bertliana","Cilia","Clarimond","Demuth","Dodda","Eberhild","Edila","Elia","Ellice","Elyenora","Elysande","Emayn","Emelin","Emmet","Enna","Ermina","Erpsuid","Eschina","Fordola","Geila","Gele","Gelen","Gerhild","Gisela","Gisla","Grede","Grishild","Gyel","Hadwis","Hegelina","Helinda","Helisent","Herleve","Hermesent","Hildelana","Ideswif","Imanie","Irmele","Lavena","Leuekin","Liefhun","Lyse","Mathild","Mehenilda","Miluda","Mylla","Odburga","Odila","Orella","Orieldis","Otgiva","Oydela","Radlia","Regana","Reingart","Rinilda","Roheisa","Rosalinde","Roysa","Sely","Sigberta","Syele","Tilla","Uda","Uireda","Ulgarda","Veleda","Wilberga","Wilmetta"],"EQ":["Alvey","Archer","Ashdale","Ashe","Ayers","Bailey","Baines","Barrett","Battle","Beake","Beck","Benbow","Blackburn","Blacke","Blackstone","Blackthorne","Bloode","Brand","Brood","Bullock","Butcher","Byrde","Byrne","Cordwyk","Cotter","Crewe","Crofte","Dalvag","Denman","Elder","Forester","Frost","Frostwyght","Garrott","Goffe","Grayve","Grey","Greyashe","Greywolfe","Greywoode","Hammil","Hart","Hawke","Hayle","Hext","Hicke","Horne","Hunt","Keene","Kemp","Knight","Lak","Lance","Langdale","Lodall","Lowe","Marshall","Moore","Outlawe","Payne","Pytte","Quick","Rakes","Rayne","Redd","Redsteele","Redwyne","Reed","Reeve","Rowntree","Royce","Royle","Rush","Ryder","Savage","Skinner","Souther","Speake","Speare","Stark","Starr","Steele","Sternn","Stone","Thorne","Vance","Vann","Walder","Warren","Wayne","Weard","Weekes","West","Westknight","Westmoore","Woode","Wyght","Wyman","Wynne","Wynter"],"jC":["Aibertain","Alderique","Alexois","Antoinaut","Arismont","Armantel","Arthurioux","Artoirel","Augustiniel","Aumeric","Baptistaux","Barnabaix","Bernon","Bloisirant","Boiselont","Briardien","Brunadier","Celestaux","Ciceroix","Cillien","Clementain","Clotaire","Clotairion","Dacien","Darceloix","Domitien","Duvicauroix","Emmanellain","Enguerran","Estinien","Eugennoix","Fabrellet","Felixient","Ferreol","Firmien","Firminnant","Florentel","Florimond","Francquet","Gabineaux","Gaethan","Gaspard","Guillaunaux","Guillefresne","Gustavain","Guydelot","Hadrefort","Heribert","Hermenost","Honoraint","Hubairtien","Huguemont","Isarmoix","Isaudorel","Ivaurault","Jacquemin","Janremi","Lancefer","Landrenel","Leodaire","Leonceault","Lidoiret","Lionnet","Louistiaux","Ludovraint","Luquelot","Marcelloix","Marcquelort","Mariustel","Maroile","Martiallais","Maurelin","Maximiloix","Nantain","Nolanel","Octavel","Oldaric","Oscarlet","Parcemel","Pascaleret","Paulemont","Percevains","Raimondaux","Romarique","Silvaire","Sombrequain","Stephannot","Sylveret","Theobalin","Theophilain","Therouanne","Thiegaud","Ursulin","Valentinoix","Vallerin","Valtemont","Vantelme","Willibert","Yannistand","Yvelont"],"Vm":["Alboise","Amandine","Ameline","Amenie","Amianne","Astrelle","Atelloune","Aurelle","Blaisie","Blandie","Breine","Brigie","Ceaulie","Celie","Cevilia","Cliaux","Dennia","Docette","Doelle","Dorys","Dylise","Edmelle","Elde","Elvide","Eminne","Ermiance","Faine","Finia","Flavielle","Florine","Frine","Gaelle","Gwenolie","Hermance","Hersande","Iliette","Iolaine","Ireine","Janchette","Jannie","Joellie","Jolaine","Laille","Liaime","Lisie","Loanne","Lucinne","Lunnie","Lycelle","Maenne","Marcette","Margelyne","Mariaute","Marielle","Maunie","Melisie","Meurise","Mianne","Nellaure","Nimie","Ninne","Nivie","Noalle","Noline","Norlaise","Odeve","Odilie","Ombeline","Ondine","Ophelie","Ophianne","Oriane","Percelle","Perinne","Perne","Pienne","Reinette","Rivienne","Roelle","Saulette","Selaine","Sofine","Solelle","Sophiane","Tanine","Thaisie","Tiphane","Trinne","Trisselle","Uloine","Ursielle","Vianne","Vielle","Yaelle","Ydaine","Yloise","Yoenne","Yolaine","Ystride","Zabinie"],"qW":["Alamenain","Arscelin","Asturmaux","Aubaints","Aubierault","Aubrenard","Aurifort","Beltardois","Bertouaint","Blodoint","Branchais","Cahernaut","Carrilaut","Charlemend","Chaunollet","Cimeaurant","Corentiaux","Coultenet","Dailemont","Dariustel","Drillemont","Drividot","Duimessand","Duremert","Ebrelnaux","Estrelaint","Eurelt","Faintillaud","Faucertaux","Faucillien","Ferdillaix","Forchetaix","Forsemart","Fraideoux","Frilaix","Fromelaut","Georjeaux","Gibrillont","Grillairmais","Grinnaux","Guerrique","Hanrieaux","Hobriaut","Hortimont","Hourlinet","Hubairtin","Iseterre","Janlenoux","Jantellot","Jehantel","Josseloux","Lanquairt","Lanverlais","Larsonient","Liautroix","Lionnellais","Lothaire","Matigniant","Mayeulons","Merthelin","Mestonnaux","Miraudont","Muraudel","Narmandais","Nellemond","Nogeloix","Norbettaux","Noudenet","Oirellain","Orselfaux","Ouraux","Padilloux","Pamisolaux","Paulecrain","Pelderain","Prairillot","Primerain","Priorfaix","Quemilien","Quiloud","Rainteau","Raitmeaux","Rillemont","Roulemet","Saistenioux","Silmontaix","Solainteau","Surlaint","Terremiaux","Thievenaix","Tirauland","Tourcenet","Travanchet","Urleaux","Usurlois","Valeriant","Valtin","Voilinaut","Vremaix","Xavalien"],"ld":["Alambertel","Alboichamps","Archevauliere","Auberlaint","Aucheforne","Bamponcet","Bardelaurain","Barnabontant","Beaudefoins","Beaudonet","Bontensont","Braitognieux","Brucemont","Cedrepierre","Chamberliaux","Charledore","Chassebel","Chatelfort","Cibleroit","Colbernoux","Dechamberre","Deresnels","Derinloire","Drancelmans","Dubeltaire","Duchesnelt","Eudestand","Eugeoiret","Evrardoux","Fauchetemps","Fauconnoix","Feuillelains","Fierlaine","Fortanceste","Fourchenault","Fousquenet","Frageorloix","Franchemontiaux","Francmontois","Gerraldieux","Godriquelain","Goudernoux","Grandeterre","Guillestet","Handeloup","Haurtefert","Haustefort","Hortefense","Ignemortel","Imbertain","Jandelaine","Jeulerand","Juliembert","Lamberteint","Langloisiert","Lantonceins","Larsefauceais","Logedanrel","Marcechamp","Marinterre","Monranguin","Montenbelt","Montorgains","Nillefrant","Noirterel","Norbertillon","Notrelchamps","Orchambaut","Ormesang","Ortefauchel","Ostoiraint","Outreguerlain","Parsemontret","Pasdevillet","Pierriquet","Portelaine","Quemperlain","Quimperin","Robairlaint","Rochedalaix","Roiteloint","Rontremont","Roustebant","Saintrelmaux","Sarmantoix","Sellecerre","Soilanteaux","Teaurelin","Terrechant","Thierremont","Torsefers","Tristechambel","Uchemantoin","Urselmert","Vaincannet","Vainchelon","Vairemont","Valeroyant","Vilauclaire","Vortefaurt"],"Kc":["A\'bhin","A\'ghol","A\'nuloh","A\'tiqa","A\'vanoh","A\'vett","B\'alih","B\'ghol","B\'nhea","B\'raht","B\'zinba","C\'behm","C\'mona","C\'shtah","C\'vanoh","D\'bhin","D\'chah","D\'lohi","D\'nuloh","E\'datih","E\'kayah","E\'mhati","E\'nijah","E\'rinha","F\'iaho","F\'lohi","F\'zula","G\'azih","G\'tenpe","G\'viloh","H\'laqa","H\'rihnn","H\'zhet","H\'zula","I\'chai","I\'datih","I\'kayah","I\'phel","I\'quon","I\'raht","I\'rihnn","J\'atoh","J\'azih","J\'chah","J\'inwa","J\'yhuh","K\'falkh","K\'phel","K\'shtah","L\'iaho","L\'olh","L\'tiqa","M\'bahlo","M\'binba","M\'welhi","N\'bhem","N\'binba","N\'quon","N\'welhi","N\'zhet","O\'tenpe","O\'tyada","O\'zinba","P\'inwa","P\'jenma","P\'tyada","Q\'linh","Q\'olh","R\'atoh","R\'ndae","S\'mitu","S\'ndae","S\'nijah","S\'yhuh","T\'jenma","T\'khot","T\'laqa","T\'rhika","U\'holha","U\'khot","U\'mitu","U\'quih","U\'viloh","V\'apa","V\'nhea","W\'holha","W\'quih","W\'rinha","X\'apa","X\'chai","X\'linh","X\'vett","Y\'rhika","Y\'thub","Y\'weta","Z\'alih","Z\'mhati","Z\'mona","Z\'thub","Z\'weta"],"u":["A\'dhodjbi","A\'gnayak","A\'khebica","A\'linhbo","B\'abodji","B\'arhll","B\'nimuili","B\'raemha","C\'lantaa","C\'ranmaia","C\'tadhara","D\'maladyu","D\'ondolo","D\'wonjhali","E\'jusana","E\'nibnpha","E\'paghlo","F\'mallibo","F\'manafa","F\'whalon","G\'intana","G\'konnala","H\'alabali","H\'molosi","I\'dhakya","I\'dhinek","I\'nanghal","I\'zazanh","I\'zimzizi","J\'dasshym","J\'lamahni","J\'majha","J\'talhdi","K\'biwali","K\'djawana","K\'lyhhia","K\'pandolu","K\'yalwann","L\'koliwe","L\'mihgazoo","M\'dennmo","M\'korolon","M\'laiboli","M\'sumbla","M\'trimmna","N\'onggo","N\'rhabye","O\'bokhn","O\'bolaff","O\'datnan","O\'juramm","O\'kholbeh","O\'ndanya","O\'yaalamo","P\'dhamya","P\'dhilogo","P\'fhiroh","P\'lahmui","P\'tajha","P\'tchakha","P\'wabati","Q\'hahtoa","Q\'nhalki","Q\'zalikko","R\'adebh","R\'lloon","R\'nabyano","S\'hozqha","S\'kalkaya","S\'lakshai","S\'naidjaa","T\'brohka","T\'mhalawi","T\'perjha","T\'pondhao","U\'bhowaqi","U\'djongo","U\'qawhau","U\'rhoyod","U\'shakkal","U\'zangho","V\'arimbeh","V\'doyagha","V\'piqoi","W\'baharra","W\'kepaga","W\'llayan","W\'yandih","W\'zamqo","X\'dhovaka","X\'ghonako","X\'pahtalo","X\'telihgo","X\'toldha","Y\'dyalani","Y\'khonebb","Y\'nbulea","Z\'attano","Z\'jhimei","Z\'moldva"],"zV":["Nunh","Nunh","Nunh","Tia","Tia","Tia","Tia","Tia","Tia","Tia","Tia","Tia","Tia","Tia","Tia","Tia","Tia","Tia","Tia","Tia","Tia","Tia","Tia","Tia","Tia","Tia","Tia","Tia","Tia","Tia","Tia","Tia","Tia","Tia","Tia","Tia","Tia","Tia","Tia","Tia","Tia","Tia","Tia","Tia","Tia","Tia","Tia","Tia","Tia","Tia","Tia","Tia","Tia","Tia","Tia","Tia","Tia","Tia","Tia","Tia","Tia","Tia","Tia","Tia","Tia","Tia","Tia","Tia","Tia","Tia","Tia","Tia","Tia","Tia","Tia","Tia","Tia","Tia","Tia","Tia","Tia","Tia","Tia","Tia","Tia","Tia","Tia","Tia","Tia","Tia","Tia","Tia","Tia","Tia","Tia","Tia","Tia","Tia","Tia","Tia"],"Mc":["Aba","Aboh","Amih","Bamu","Banhi","Batih","Belhi","Bhen","Bhudi","Bihl","Celah","Chaho","Cirha","Cott","Denma","Dhen","Dhol","Dinhe","Falh","Fhey","Fhuz","Fijah","Gayha","Genhu","Ghuh","Ginwa","Halha","Heleh","Hena","Hiqoh","Iahe","Jesal","Jhamei","Jhida","Jinh","Jutah","Kett","Khah","Khilo","Khuba","Laqi","Lhea","Lhuil","Lizha","Loha","Malha","Menh","Mhasi","Mitnu","Monhi","Muhih","Naweh","Ndai","Neneh","Nitsah","Nulah","Odh","Oimeh","Pahlo","Petih","Phen","Pinha","Qhulu","Qolnh","Quah","Quohn","Raha","Rahz","Rhel","Rhid","Rhiki","Rhof","Rhowa","Rhuwa","Rihll","Runja","Sheqa","Shikhu","Sthah","Taqa","Tenbe","Thish","Tohka","Tyanu","Tyata","Tyatu","Tykha","Vanih","Vheo","Vhuh","Vimba","Wetae","Wiloh","Xhula","Yarhu","Yelho","Yhisa","Zhed","Zinbhe","Zolwe"],"ZB":["Amh\'a","Bathu\'a","Daca\'li","Daca\'to","Detoh\'li","Dhebi\'li","Dhebi\'ya","Fihpo\'li","Gota\'li","Hawu\'li","Jihli\'a","Kehda\'li","Kehda\'to","Kheda\'a","Khona\'li","Khona\'to","Khuja\'a","Khuja\'to","Khuma\'zi","Kiht\'a","Kiht\'li","Koh\'a","Koh\'li","Koh\'sae","Lalah\'to","Leih\'a","Leih\'li","Leih\'to","Lho\'a","Lho\'ir","Masha\'to","Mholi\'ra","Mholi\'to","Miah\'to","Mikh\'a","Mikh\'li","Mikh\'to","Naoh\'a","Naoh\'li","Naoh\'ra","Nhagi\'li","Nhago\'li","Nhago\'ra","Nhago\'ya","Nheu\'a","Osha\'li","Osha\'tan","Osha\'to","Osha\'zi","Pelhi\'sae","Pimoh\'a","Pimoh\'to","Poki\'a","Qahs\'a","Qata\'a","Qata\'to","Qih\'sae","Qih\'to","Qih\'wo","Qina\'a","Qina\'ra","Qina\'to","Raih\'a","Raih\'li","Rhaq\'a","Rhaya\'li","Rhaya\'lo","Rhaya\'ra","Rhel\'ir","Rhel\'ra","Rhel\'wo","Rhela\'a","Rhela\'li","Rhela\'to","Rhesh\'a","Rinh\'a","Rubh\'a","Rubh\'li","Sami\'a","Sami\'tan","Sami\'to","Seda\'a","Seda\'li","Sizha\'li","Sizha\'to","Tahla\'to","Tefh\'a","Thata\'sae","Tyo\'li","Una\'a","Una\'li","Una\'sae","Una\'to","Wyra\'li","Wyra\'to","Yehn\'a","Yehn\'ir","Yehn\'wo","Zana\'sae","Zana\'tan"],"O5":["Amh","Bathu","Bukah","Cemi","Daca","Detoh","Dhebi","Doyoh","Fihpo","Giah","Gota","Hahs","Hawu","Hnaba","Jihli","Kehda","Kheni","Khloe","Khona","Khuja","Khuma","Kiht","Koh","Lalah","Leih","Lhei","Lho","Masha","Masya","Mauh","Mhih","Mholi","Miah","Mikh","Monh","Muijh","Naih","Naoh","Nashu","Nemoh","Ngha","Nhagi","Nhago","Nheu","Nozih","Oah","Oghii","Okhi","Okkh","Osha","Pahja","Panha","Pawah","Pelhi","Pimoh","Poki","Pyha","Qahs","Qata","Qhom","Qhon","Qhota","Qih","Qina","Raih","Rhaq","Rhaya","Rhel","Rhela","Rhesh","Rhoe","Rinh","Rubh","Sahja","Sami","Seda","Senah","Sizha","Tahla","Tajih","Tefh","Thata","Thya","Tseh","Tsimh","Tsubh","Tyago","Tyo","Una","Urha","Vhaso","Wyra","Xau","Xheh","Yehn","Yhah","Yhom","Yohah","Zana","Ziuz"],"fR":["Akhabila","Akhabila","Amariyo","Amariyo","Anbolho","Anbolho","Awandah","Awandah","Bajhiri","Bajhiri","Betwanhe","Betwanhe","Binbotaj","Binbotaj","Burwani","Burwani","Chalahko","Chalahko","Chelewae","Chelewae","Dakwhil","Dakwhil","Dolabnha","Dolabnha","Elakha","Elakha","Entialpoh","Entialpoh","Epocan","Epocan","Fashonti","Fashonti","Gamduhla","Gamduhla","Ganajai","Ganajai","Garanjy","Garanjy","Jaab","Jaab","Jakkya","Jakkya","Jawantal","Jawantal","Jawantal","Jawantal","Jinjahl","Jinjahl","Jomalah","Jomalah","Kaatapoh","Kaatapoh","Khamazom","Khamazom","Lanbatal","Lanbatal","Lihzeh","Lihzeh","Lyehga","Lyehga","Maimhov","Maimhov","Mewrilah","Mewrilah","Mhakaracca","Mhakaracca","Molkoh","Molkoh","Molkot","Molkot","Moshantu","Moshantu","Moshroca","Moshroca","Mujuuk","Mujuuk","Nbolo","Nbolo","Nelhah","Nelhah","Panipahr","Panipahr","Polaali","Polaali","Quowaital","Quowaital","Rabntah","Rabntah","Relanah","Relanah","Tayuun","Tayuun","Wahcondalo","Wahcondalo","Wilzuun","Wilzuun","Wolndara","Wolndara","Zhwan","Zhwan"],"kB":["A","Aby","Apa","Ba","Cha","Du","E","Fe","Fu","Ga","Gol","Ha","Ho","Ja","Ka","Kam","Ke","Ko","Lif","Mo","Na","No","O","Pe","Pu","Ra","Ro","Sha","Sho","Su","Te","Va","Wa","Ya","Yu","Za","Zo"],"o0":["An","Aro","Ato","Bu","Buli","Buoy","Dala","Du","E","Gami","Gu","Ha","Hamy","Hon","Ke","Kelu","Kesu","Kog","Loh","Ma","Maba","Mada","Magu","Mena","Mesha","Mol","Na","Po","Poto","Ra","Rala","Rom","Tam","Taya","Tha","Tun","Vu","Yara","Yu","Za","Zo","Zu","Zuka"],"wY":["aka","bas","cho","gin","guda","hoy","ipo","jika","jin","lado","lbi","lgo","lin","lito","lka","lno","lto","lugi","lyo","lza","maga","mani","micha","mono","nan","nco","neko","neli","nga","ngi","ngo","on","pas","ppo","ral","rimu","rok","tan","toni","topa","wazi","zai","zak","zon","zyl","zyn"],"O2":["Bibi","Bubu","Chacha","Cheche","Coco","Dada","Didi","Fafa","Fofo","Fufu","Gaga","Gigi","Gogo","Gugu","Haha","Hehe","Hihi","Jaja","Jiji","Jojo","Koko","Kuku","Lala","Lili","Lolo","Mama","Meme","Mimi","Nana","Nono","Papa","Pepe","Popo","Ququ","Rara","Rere","Riri","Roro","Ruru","Sasa","Sese","Tata","Tutu","Wawa","Yaya","Yoyo","Yuyu","Zaza","Zeze","Zuzu"],"Vp":["an","beta","doa","doga","fono","issa","joni","lai","lan","lao","lata","mai","maya","muko","mun","nasu","neja","nen","nima","nji","nori","npa","nzo","poki","raji","raka","rya","samu","shan","tuni","ulu","vachi","wai","wazu","yadi","yako","yon","zan","zigo"],"RR":["Ba","Bi","Bu","Cha","Chu","Da","De","Di","Fa","Fi","Fu","Ga","Go","Ha","Hi","Ja","Ji","Ke","Ki","Ko","Ku","La","Le","Li","Lo","Lu","Ma","Mi","Mo","Na","Ni","No","Nu","Pa","Pe","Po","Pu","Qu","Ru","Sa","Se","Sho","So","Ta","Te","To","Tu","Va","Wa","Wo","Ya","Yo","Yu","Ze","Zo","Zu"],"Sh":["ba","cha","da","fu","i","ka","ke","ki","ku","la","le","lo","lu","mo","mu","na","ne","ni","no","po","pu","re","ro","sa","sha","shu","si","su","ta","to","tsu","wa","wo","ya","yo","za","ze"],"qj":["Ahldfoet","Ahlduwil","Ahtmhas","Ahtund","Aisbraena","Aisibhir","Aismurl","Bhaldwyrn","Broenfarr","Broenfohc","Broenwyrn","Caersyng","Denkyrtrach","Drysnagl","Elilwaen","Eyntroeg","Eyrifrusk","Eyrisunn","Faezmoen","Firkmann","Floernmann","Foerzagyl","Fyrilskyf","Fyrilsunn","Fyrmurl","Greinborg","Greintoum","Grynewaht","Guldweitz","Gybetund","Helbhanth","Helbstyrn","Holskgeiss","Iyrnbroda","Iyrnwoerd","Junghbhar","Keltraeng","Ketenborn","Ketenramm","Krystrymm","Loetsfeik","Loezkirz","Lonwoerd","Merlzirn","Moerfian","Mytemyrgan","Nystbyrm","Nyunkrepf","Ostsygg","Ostyrgrein","Pfrymloef","Pfymborg","Rhitahtyn","Rhitskylt","Rhylharr","Roehanth","Rysstyl","Saesbroda","Skaenryss","Skarnmhar","Skoenliht","Soemraet","Staelhundr","Sterrbroda","Sthalrhet","Stymmwaen","Sundyrund","Swozramm","Swozwaent","Syhrdaeg","Sylbweitz","Syvinborn","Syvinmhas","Syznskoef","Thosinwurth","Trachtoum","Tragghyr","Trahgwilf","Waebahct","Waemterbin","Wannmaga","Wastlleid","Whasbyrm","Whastrach","Wheibrot","Wilfmoen","Wiltwaek","Winstoura","Wistsunn","Wistyrnahct","Wunthyll","Wunthyml","Wysslorh","Wyznguld","Zaesoeya","Zehkrepf","Zehrymm","Zirnberk","Zwelfaren"],"st":["Ansamhasyn","Blaetibaensyn","Bleibornsyn","Bloedornnsyn","Bloegaezsyn","Bloelaksyn","Borgbyldasyn","Bryndoensyn","Doerdyrfsyn","Drysfalksyn","Eifaentsyn","Ernafolgsyn","Ernahaemrsyn","Eynfoetsyn","Eynmoensyn","Farredzasyn","Fhilfhisyn","Fiandoensyn","Flekkbornsyn","Floeransasyn","Floerasksyn","Fyrlihtsyn","Geimfoetsyn","Geissbornsyn","Ghimfolgsyn","Ghutsaldsyn","Glazghotsyn","Glazhwabsyn","Grymgaezsyn","Grymkoelsyn","Guhtgeissyn","Guldgarasyn","Guldhaemrsyn","Guolfyrsyn","Guoljarrsyn","Gyrmoensyn","Haerfrusksyn","Helbmannsyn","Hezzfyrsyn","Hirskhwabsyn","Hollkoensyn","Hollmyrgansyn","Horskhundsyn","Hyllingilsyn","Hyllkestsyn","Hyrtberasyn","Hyrtfyrsyn","Kindlaentsyn","Klynkestsyn","Kroemkhezlsyn","Loetrlihtsyn","Loetwilfsyn","Loezkhansyn","Loezmannsyn","Lonwoerdsyn","Lubbloefsyn","Lyngmholsyn","Lyngroegansyn","Lyngwintsyn","Maetironnsyn","Marmannsyn","Merlskyfsyn","Moegmhusyn","Moeramohtsyn","Niunaglsyn","Nyunmerlsyn","Oebmannsyn","Ostornsyn","Ostyrmannsyn","Ostyrwilfsyn","Pfarskratsyn","Pfymseiksyn","Rhansathsyn","Rhotsatzasyn","Rhutirammsyn","Rosnsathsyn","Saesraensyn","Seiksatzsyn","Solksthalsyn","Sundwilfsyn","Sunnskyfsyn","Swarsweigsyn","Swozstyrmsyn","Swyroegansyn","Sykursyn","Syvinsnoesyn","Ubyltusyn","Untawhasyn","Wastbyrtsyn","Wastgreinsyn","Wastmyndsyn","Wastwebbsyn","Wintbrotsyn","Wintfohcsyn","Wintwyrnsyn","Wistweinsyn","Wuntwilfsyn","Zeinkletsyn","Zwynwyrstsyn"],"vE":["Aergwyb","Aermwyb","Ahlbhyda","Ahldswys","Aiswyda","Alyrwyda","Ankabhyda","Arenswys","Barawyda","Beraswys","Berkwyb","Bhaldbhyda","Bhaldswys","Bhratwyb","Bleiswys","Bloewyda","Bornwyda","Broenswys","Brotwyda","Brynwyb","Bylgwyda","Caerswys","Dennwyda","Deongeim","Doeswyb","Drysgeim","Dyrfswys","Ernaswys","Eyngeim","Fedarlona","Fhetnwyb","Floerswys","Fraeswys","Frusklona","Frutlona","Fyrgeim","Fyrilswys","Ganzgeim","Geimbhyda","Ghimswys","Guhtgeim","Gybalona","Haelgeim","Haldswys","Hartgeim","Hyrtgeim","Isilswys","Kestlona","Khannthota","Kletlona","Klynthota","Krysslona","Kyndthota","Lagonthota","Loetrgeim","Lynathota","Merlgeim","Mhaslona","Moegrael","Nahctrael","Northota","Ofangeim","Rammthota","Rymmthota","Ryssrael","Satznthota","Skaenrael","Skoenthota","Snoegeim","Sterrthota","Styrgeim","Sundyrwyb","Sunnthota","Swaenwyb","Swerdwyb","Swygrael","Syznrael","Syznthota","Thorwyb","Toegwyb","Toffwyb","Trachwyb","Ubilwyda","Untawyb","Usynwyda","Waemwyb","Wannwyda","Wardnwyb","Webbrael","Wilfbhyda","Wiltwyda","Wolkwyb","Wollwyda","Wurtwyb","Wysswyda","Zantwyb","Zirnbhyda","Zirnwyda","Zoerwyda"],"qw":["Ansamhawyn","Blaetibaenwyn","Bleibornwyn","Bloedornnwyn","Bloegaezwyn","Bloelakwyn","Borgbyldawyn","Bryndoenwyn","Doerdyrfwyn","Drysfalkwyn","Eifaentwyn","Ernafolgwyn","Ernahaemrwyn","Eynfoetwyn","Eynmoenwyn","Farredzawyn","Fhilfhiwyn","Fiandoenwyn","Flekkbornwyn","Floeransawyn","Floeraskwyn","Fyrlihtwyn","Geimfoetwyn","Geissbornwyn","Ghimfolgwyn","Ghutsaldwyn","Glazghotwyn","Glazhwabwyn","Grymgaezwyn","Grymkoelwyn","Guhtgeiswyn","Guldgarawyn","Guldhaemrwyn","Guolfyrwyn","Guoljarrwyn","Gyrmoenwyn","Haerfruskwyn","Helbmannwyn","Hezzfyrwyn","Hirskhwabwyn","Hollkoenwyn","Hollmyrganwyn","Horskhundwyn","Hyllingilwyn","Hyllkestwyn","Hyrtberawyn","Hyrtfyrwyn","Kindlaentwyn","Klynkestwyn","Kroemkhezlwyn","Loetrlihtwyn","Loetwilfwyn","Loezkhanwyn","Loezmannwyn","Lonwoerdwyn","Lubbloefwyn","Lyngmholwyn","Lyngroeganwyn","Lyngwintwyn","Maetironnwyn","Marmannwyn","Merlskyfwyn","Moegmhuwyn","Moeramohtwyn","Niunaglwyn","Nyunmerlwyn","Oebmannwyn","Ostornwyn","Ostyrmannwyn","Ostyrwilfwyn","Pfarskratwyn","Pfymseikwyn","Rhansathwyn","Rhotsatzawyn","Rhutirammwyn","Rosnsathwyn","Saesraenwyn","Seiksatzwyn","Solksthalwyn","Sundwilfwyn","Sunnskyfwyn","Swarsweigwyn","Swozstyrmwyn","Swyroeganwyn","Sykurwyn","Syvinsnoewyn","Ubyltuwyn","Untawhawyn","Wastbyrtwyn","Wastgreinwyn","Wastmyndwyn","Wastwebbwyn","Wintbrotwyn","Wintfohcwyn","Wintwyrnwyn","Wistweinwyn","Wuntwilfwyn","Zeinkletwyn","Zwynwyrstwyn"],"$C":["Able","Angry","Ardent","Auburn","Awful","Bitter","Bloodied","Blue","Bounding","Brazen","Bright","Broken","Burrowing","Climbing","Colied","Crooked","Dancing","Deep","Diving","Dour","Drifting","Drowning","Drunken","Dull","Eager","Early","Eastern","Falling","Glorious","Graceful","Happy","Honorable","Ivory","Jagged","Jealous","Jeweled","Joyous","Keen","Kicking","Kind","Knotted","Late","Laughing","Lazy","Leaping","Lost","Loud","Lugubrious","Missing","Modest","Nimble","Noble","Northern","Painted","Patient","Poison","Proud","Raging","Rampaging","Red","Rising","Rolling","Running","Sad","Shadowy","Shining","Silent","Singing","Skittering","Sleeping","Slippery","Slow","Solid","Southern","Spinning","Spiraling","Stalwart","Staring","Steaming","Still","Strident","Striking","Sulking","Talking","Tall","Tanned","Terrible","Tiny","Towering","Valliant","Walking","Wandering","Weeping","Western","Whispering","White","Wise","Yawning","Yellow","Zealous"],"ye":["Adder","Ale","Ant","Antelope","Aurochs","Axe","Bear","Beetle","Boar","Bone","Boulder","Brother","Buck","Buffalo","Bull","Buzzard","Cactus","Castle","Cedar","Chocobo","Coeurl","Copper","Coyote","Crab","Crow","Cyclone","Desert","Dragon","Dragonfly","Drake","Eagle","Elm","Falcon","Fir","Fire","Flame","Forest","Fox","Frost","Galago","Geyser","Ghost","Glacier","Gnat","Goat","Goobbue","Gorge","Griffin","Grotto","Hammer","Hand","Helm","Herd","Hill","Hornet","Iron","Island","Jackal","Jungle","Knife","Mesa","Mite","Mole","Morbol","Mountain","Mouse","Mythril","Needle","Oak","Peiste","Pine","Rain","Raptor","Rat","Ravine","Scythe","Sentinel","Shadow","Shield","Smoke","Snake","Snow","Spear","Spire","Steel","Stone","Stump","Sword","Thunder","Toad","Tomb","Tower","Tree","Volcano","Walnut","Wasp","Wine","Wolf","Wyvern","Yarzon"],"Hv":["Abyss","Acorn","Amber","Apple","Bat","Bee","Blossom","Bream","Bride","Bridle","Calf","Clam","Cloud","Comet","Condor","Crane","Creek","Crow","Current","Daisy","Daughter","Dawn","Diamond","Dodo","Doe","Dolphin","Dove","Dream","Duck","Dusk","Eddy","Elm","Emerald","Eve","Fawn","Feather","Firefly","Flower","Frog","Gem","Ghost","Glass","Goddess","Gull","Hare","Heaven","Heaven","Heron","Herring","Ivy","Jewel","Ladybug","Lake","Lamb","Laurel","Light","Lily","Mahogany","Marmot","Meadow","Moon","Moss","Oak","Ocean","Orchid","Orobon","Pearl","Pelican","Plain","Plum","Rabbit","Rafflesia","River","Rose","Ruby","Salmon","Sapphire","Sentinel","Siren","Sky","Smile","Sparrow","Spring","Squirrel","Star","Stork","Stream","Swan","Thorn","Tree","Trout","Tulip","Turtle","Veil","Waterfall","Wave","Whale","Whirlpool","Willow","Wool"],"XO":["Akagi","Baien","Byakubu","Doware","Ensetsu","Fugetsu","Fukudo","Genbu","Gosetsu","Gyodo","Gyokusei","Hansaku","Hayabusa","Hien","Hiun","Hojo","Isse","Izuna","Kagero","Kagetora","Kaien","Kamui","Kansui","Karaku","Kasasagi","Kazan","Keiho","Keimei","Keiten","Kongo","Kyokuho","Masatsuchi","Motogoe","Murakumo","Nawashiro","Raiden","Rakuyo","Ransetsu","Rasho","Rino","Ryosen","Sagan","Saiun","Sakyo","Senryo","Sentei","Shiden","Shinto","Shiranami","Shirojishi","Shiun","Tansui","Tosetsu","Tougen","Tsukikage","Udoku","Ugan","Ugetsu","Ukyo","Unryu","Unzan","Usefushi","Yabusame","Yomei","Yusui","Zansei","Zansetsu","Zuiko"],"FH":["Ajisai","Anzu","Aoi","Atori","Awayuki","Ayame","Azami","Azena","Botan","Chidori","Chigusa","Chihaya","Enrei","Furan","Haname","Hazakura","Hibari","Ibara","Ibuki","Isuka","Izayoi","Kaede","Kagetsu","Kasumi","Kikusui","Kikyo","Kogyoku","Koharu","Komachi","Koruri","Kotokaze","Kototsuki","Kozakura","Kuina","Kumokiri","Kurenai","Mahiwa","Makoto","Mana","Manazuru","Mine","Misago","Mitsuba","Mizuki","Mozu","Narumi","Natsume","Ochimi","Sayo","Sazanami","Seika","Sekka","Shion","Sui","Sumire","Suzume","Tobana","Tsubaki","Tsugumi","Ume","Uto","Waka","Yachiyo","Yayoi","Yomi","Yozakura","Yuki","Zakuro"],"k2":["Abumi","Akagane","Akiudo","Aogane","Bakuro","Banjo","Benitoki","Bugai","Buhen","Bunja","Chosai","Daisho","Daitou","Dejiki","Doshin","Edakumi","Fukiku","Furukane","Gakunin","Gakuto","Godo","Gunji","Gyoji","Hagane","Hakuuchi","Hatasashi","Ishiku","Iteya","Ittetsu","Jizutsu","Kabuto","Kaifu","Kaisuri","Kaneuchi","Kanshi","Kasanui","Kataribe","Kaujin","Kawanami","Kazarishi","Kensaki","Kiba","Kodakumi","Kogane","Kurogane","Kusakari","Kusushi","Maibito","Meiken","Mihata","Miyumi","Mizuhiki","Musa","Naeuri","Nagae","Obinata","Okeya","Onishi","Oshidari","Oshiga","Ritsuso","Rokuyari","Sakimuri","Sarugaku","Sashihai","Shibunuri","Shikibu","Shirogane","Tabito","Tachikake","Tanshi","Tatewaki","Torioi","Tosho","Tsurugi","Tsuwamono","Urabe","Urabito","Ushikai","Yatsurugi","Yumishi","Yumite","Yumitori","Yuzuka"],"Gg":["Abaka","Achujim","Adarkidai","Adkiragh","Agasiletai","Agsaldai","Agujam","Alchigh","Alghu","Amasandji","Amasar","Ambaghai","Anarba","Arabuccha","Aragibal","Argasar","Arik","Arslang","Aruktai","Baatu","Baavgai","Bagaridai","Baidar","Baidur","Bardam","Batacaciqan","Batachikhan","Bayan","Bayar","Begugtei","Bucharan","Budjek","Bugunutei","Bujeg","Bujir","Bukidai","Bulqadar","Bultechu","Bultger","Bulugan","Buqatai","Buyantu","Caragai","Chaghadai","Chaghagan","Chanar","Charakha","Chidukhul","Chigu","Chilagun","Chiledu","Chilger","Chiluku","Chormagan","Chuacenur","Chulgetei","Daidukul","Delbeg","Dorbei","Emlig","Esugen","Guyug","Hooshal","Ilugei","Iturgen","Jagadai","Jamugha","Jebei","Jebke","Jelme","Jenkshi","Khaidai","Khaishan","Khal","Khalja","Khuchar","Kishiligh","Kuyuk","Kuzhuk","Ligdan","Luvsan","Maqali","Masgud","Mauci","Munglig","Ogodei","Ozbeg","Qoribucha","Shilugei","Shiramun","Sidurgu","Sukegei","Tamachag","Teleboge","Tordung","Tsagaday","Uchikin","Udutai","Yabuqa","Yerentai"],"NZ":["Alagh","Alan","Alt","Altani","Altun","Alun","Anggir","Bagurchi","Barghujin","Barqujin","Baugurchi","Beki","Berude","Bodo","Boljigchi","Boragchin","Borogchin","Boroqcin","Borte","Botokhui","Caalun","Caur","Ceceyigen","Chabi","Chagur","Chakha","Chambui","Checheyigen","Cherbin","Chotan","Cirina","Cota","Cotan","Cotota","Dagasi","Doquz","Dorgene","Dorgono","Doyi","Ebegei","Eji","Eke","Emegen","Gergei","Ghoa","Gorbeljin","Gurbesu","Guua","Hoelun","Hogelun","Holuikhan","Hujaghur","Hujaur","Ibakha","Jaliqai","Khadagan","Khatun","Khogaghchin","Khojin","Khorchi","Khorijin","Khugurchin","Khulan","Koko","Maral","Mergen","Mide","Narengawa","Nigen","Nomolun","Ogelen","Oghul","Ogul","Oki","Orbei","Orghana","Qatun","Qoyar","Samga","Sechen","Shar","Sokhatai","Sorkhaghtani","Sorocan","Surkukteni","Suvd","Tacchotan","Tarqun","Tegusken","Temulun","Togene","Toragana","Toregene","Tsenxer","Turakina","Ucugen","Ujin","Ulan","Yesuntei"],"FF":["Adarkim","Angura","Arulaq","Avagnar","Bairon","Bayaqud","Bolir","Borlaaq","Buduga","Dalamiq","Dataq","Dazkar","Dhoro","Dotharl","Ejinn","Geneq","Gesi","Gharl","Goro","Haragin","Himaa","Horo","Hotgo","Iriq","Jhungid","Kagon","Kahkol","Kha","Kharlu","Khatayin","Malaguld","Malqir","Mankhad","Mierqid","Moks","Mol","Noykin","Olkund","Orben","Oronir","Oroq","Qalli","Qerel","Qestir","Sagahl","Torgud","Tumet","Ugund","Ura","Urumet","Uyagir"],"Zp":["Asmir","Bazhen","Berimir ","Bogdan","Bogomil","Bojan","Borimir","Borna","Bozidar ","Branimir","Brondy","Budimir","Cachi","Cededa","Ctibor","Daren","Devyatko","Deyan","Dmitar","Dobry","Dragomir","Drzithghar","Duscha","Frathopan","Gorynya","Grugur","Hrvoye","Ivica","Izet","Jareck","Jarrick","Juraj","Kazek","Krsto","Ladimir","Ladio","Loeman","Lovro","Luchezar","Lutomis","Matija","Mihalo","Miladin","Milorad","Mirothgar","Mistithgar","Mladen","Mutimir","Mylon","Nekras","Nenad","Ninothgar","Osorio","Pavao","Petar","Preben","Putimir","Radimir","Radisa","Ratibor","Ratimir","Ratmir","Razumnik","Semir","Sinisa","Stjepan","Sudimir","Svante","Svatomir","Svetithgar","Svetozar","Taman","Tihomir","Tomithgar","Toplica","Vadim","Velibor","Velithgar","Veselin","Visethgar","Vladithgar","Vojin","Voron","Vsethgar","Vtorak","Xeven","Yaromir","Yaropol","Yarothgar","Zhdan","Zlatan","Zoran","Zvonimir"],"nP":["Adeanna","Ajolla","Amarya","Amilan","Amira","Amirka","Amov","Aredna","Arodica","Astana","Astolla","Asvana","Atessa","Atolna","Avesna","Avira","Ayurya","Azetina","Azora","Azorya"],"bM":["Adis","Ajdin","Andriya","Belun","Bernardin","Blaz","Bolek","Boras","Boric","Borsch","Bozek","Brathgar","Bronithgar","Casimir","Cvetko","Czethgar","Dalek","Damir","Darko","Davor","Desimir","Dob","Dobrica","Domagoi","Drasko","Drazan","Dubynya","Dusan","Emerik","Goran","Gostimil ","Gradimir","Haris","Iljko","Ivan","Ivanis","Jaromir","Kocelj","Koschey","Kresimir","Kriv","Kulin","Ladithgar","Lirim","Lubomir","Ludevit","Matej","Matko","Mecek","Mikac","Milenko","Milovan","Milutin","Miodrag","Mirko","Mithgar","Novak","Ostromir","Pribina","Raclaw","Radigost","Radovan","Rostik","Sead","Sladkey","Slathac","Slobodan","Stanik","Stanimir","Stas","Svyatogor","Tanix","Tikhomir","Tilo","Trpimir","Ulfo","Vaclav","Velimir","Vencel","Vladan","Vladimir","Vlastimil","Volos","Voynomir","Vsemil","Vsevolod","Vuk","Vyachko","Waldemar","Wenceslas","Yov","Zdethgar","Zdravko","Zelimir","Ziv","Zlatomir","Zorya"],"C8":["Anatalyasch","Anovsch","Brankasch","Ditasch","Ellasch","Enyasch","Erayasch","Inivisch","Irryasch","Jovasch","Lantasch","Lentyasch","Lianasch","Linasch","Liorasch","Liubasch","Lunyasch","Maevsch","Mildasch","Natasch","Nintasch","Olanasch","Onasch","Ovasch","Petyasch","Piryasch","Ratyasch","Ridnisch","Rolvasch","Slanasch","Slendisch","Slobasch","Stalyasch","Stevasch","Svanasch","Svenach","Tilvisch","Tirasch","Ulgasch","Utyasch","Veitasch","Vetasch","Votyasch","Wenyasch","Wirasch","Yanavsch","Yorvasch","Zelasch","Zlatasch"],"J3":["Acja","Aluette","Alys","Arjm","Arna","Asdjs","Bjel","Bjonse","Blenna","Cedira","Coeli","Cordia","Creanise","Debroye","Djole","Donne","Eljn","Eljth","Ellen","Eremia","Fidona","Fjola","Glinta","Hatia","Heljn","Hjek","Juritta","Kinara","Kjat","Krjn","Ktjn","Kukra","Lachelle","Ladonia","Leeja","Lilja","Ljot","Lorilae","Mjara","Motey","Mua","Mydia","Ney","Nljsa","Nojra","Osk","Petra","Piane","Qestra","Rachine","Rael","Rena","Rjsha","Ruuj","Shara","Sjol","Slejsa","Sonja","Sophie","Spina","Syrenead","Taranis","Theja","Thesa","Thracie","Ukina","Una","Valentyne","Veis","Venase","Verre","Vilma","Vjkta","Yenzelle","Yodyl","Yrys","Ysera","Yuma","Yurhee","Yvet","Zelfie"],"sM":["Atoel","Bysnoe","Camoa","Dei-Ijla","Eryut","Fyth","Golmarr","Hyskaris","Iryut","Ljanta","Miret-Moor","Miret-Njer","Muscadet","Otoel","Qoet","Rysto","Sjasaris","Tym","Viras","Voras","Wolt","Yascaret"],"fP":["Arda","Bosco","Cahuac","Cebe","Gucuma","Gugoza","Guguerro","Huin","Isshu","Kisne","Lesrekta","Muruc","Oghu","Paharo","Roda","Tehp","Tormelados","Tswarra","Yapih","Yaxin","Ymir"]}');
;// CONCATENATED MODULE: ./src/name-generator/ffxiv-name-generator/data/miqote-suffixes.json
const miqote_suffixes_namespaceObject = JSON.parse('{"a":1,"to":2,"li":3,"sae":4,"ra":5,"ir":6,"wo":7,"ya":8,"zi":9,"tan":10}');
;// CONCATENATED MODULE: ./src/name-generator/ffxiv-name-generator/data/miqote-tribes.json
const miqote_tribes_namespaceObject = JSON.parse('{"A":"Antelope","B":"Boar","C":"Coeurl","D":"Dodo","E":"Eft","F":"Bear","G":"Gryphon","H":"Gigantoad","I":"Buffalo","J":"Jackal","K":"Hipparion","L":"Viper","M":"Marmot","N":"Aldgoat","O":"Mole","P":"Basilisk","Q":"Puk","R":"Raptor","S":"Zu","T":"Condor","U":"Drake","V":"Vulture","W":"Wolf","X":"Lynx","Y":"Jaguar","Z":"Ziz"}');
;// CONCATENATED MODULE: ./src/name-generator/ffxiv-name-generator/data/roegadyn-dictionary.json
const roegadyn_dictionary_namespaceObject = JSON.parse('{"Abar":{"definition_en":"Lone/Alone","grammar":"A"},"Abyl":{"definition_en":"Rage","grammar":"N"},"Aent":{"definition_en":"Duck","grammar":"N"},"Aerg":{"definition_en":"Ambitious","grammar":"A"},"Aerm":{"definition_en":"Poor","grammar":"A"},"Aerst":{"definition_en":"First","grammar":"A"},"Agat":{"definition_en":"Amber","grammar":"AN"},"Agynn":{"definition_en":"Beginning","grammar":"N"},"Ahct":{"definition_en":"River","grammar":"N"},"Ahl":{"definition_en":"Eel","grammar":"N"},"Ahld":{"definition_en":"Old","grammar":"A"},"Ahr":{"definition_en":"Eagle","grammar":"N"},"Ahrm":{"definition_en":"Arm","grammar":"N"},"Aht":{"definition_en":"Eight","grammar":"A"},"Ahtyn":{"definition_en":"Judge","grammar":"N"},"Ahtza":{"definition_en":"Eighty","grammar":"A"},"Ais":{"definition_en":"Ice","grammar":"N"},"Alyr":{"definition_en":"Alder","grammar":"N"},"Anka":{"definition_en":"Anchor","grammar":"N"},"Ansa":{"definition_en":"Scythe","grammar":"N"},"Aren":{"definition_en":"Harvest","grammar":"N"},"Ask":{"definition_en":"Ash","grammar":"N"},"Awyr":{"definition_en":"Absent","grammar":"A"},"Baen":{"definition_en":"Bone","grammar":"N"},"Bara":{"definition_en":"Bare/Naked","grammar":"A"},"Benn":{"definition_en":"Leg","grammar":"N"},"Bera":{"definition_en":"Berry","grammar":"N"},"Berk":{"definition_en":"Mountain","grammar":"N"},"Bhald":{"definition_en":"Bold/Brave","grammar":"A"},"Bhaln":{"definition_en":"Plague","grammar":"N"},"Bhar":{"definition_en":"Bear","grammar":"N"},"Bhir":{"definition_en":"Ale","grammar":"N"},"Bhrat":{"definition_en":"Meat","grammar":"N"},"Blaet":{"definition_en":"Blood","grammar":"N"},"Blan":{"definition_en":"Darkness/Dark","grammar":"AN"},"Blau":{"definition_en":"Lead","grammar":"AN"},"Blei":{"definition_en":"Pale","grammar":"A"},"Bloe":{"definition_en":"Blue","grammar":"A"},"Bluom":{"definition_en":"Flower","grammar":"N"},"Blyn":{"definition_en":"Blind","grammar":"A"},"Blyss":{"definition_en":"Blossom","grammar":"N"},"Borg":{"definition_en":"Castle","grammar":"N"},"Born":{"definition_en":"Boar","grammar":"N"},"Braen":{"definition_en":"Break","grammar":"V"},"Brem":{"definition_en":"Bramble","grammar":"N"},"Broda":{"definition_en":"Brother","grammar":"N"},"Broen":{"definition_en":"Brown","grammar":"A"},"Broes":{"definition_en":"Chest","grammar":"N"},"Brot":{"definition_en":"Bread","grammar":"N"},"Bryda":{"definition_en":"Bride","grammar":"N"},"Bryn":{"definition_en":"Spring","grammar":"N"},"Brytt":{"definition_en":"Bridle","grammar":"N"},"Byld":{"definition_en":"Make","grammar":"V"},"Bylda":{"definition_en":"Maker","grammar":"N"},"Byrg":{"definition_en":"Protect","grammar":"V","derivatives":{"N":"Byrgin"}},"Bylg":{"definition_en":"Fertile","grammar":"A"},"Byrm":{"definition_en":"Tree","grammar":"N"},"Byrt":{"definition_en":"Axe","grammar":"N"},"Caepf":{"definition_en":"Slate","grammar":"AN"},"Caer":{"definition_en":"Sad","grammar":"A","derivatives":{"A":"Careig"}},"Ceig":{"definition_en":"Sail","grammar":"N"},"Ceil":{"definition_en":"Rope","grammar":"N"},"Cwaen":{"definition_en":"Pine","grammar":"N"},"Cwin":{"definition_en":"Wine","grammar":"N"},"Daeg":{"definition_en":"Soldier","grammar":"N"},"Dani":{"definition_en":"Narrow","grammar":"A"},"Denkyr":{"definition_en":"Thinking","grammar":"A"},"Denn":{"definition_en":"Thin","grammar":"A"},"Dhem":{"definition_en":"Dusk","grammar":"N"},"Doen":{"definition_en":"Thunder","grammar":"N"},"Doer":{"definition_en":"Dry","grammar":"A"},"Does":{"definition_en":"Two","grammar":"AN"},"Dornn":{"definition_en":"Thorn","grammar":"N"},"Dorpf":{"definition_en":"Village","grammar":"N"},"Draeg":{"definition_en":"Carry","grammar":"V"},"Draga":{"definition_en":"Carrier","grammar":"N"},"Drys":{"definition_en":"Three","grammar":"AN"},"Dyn":{"definition_en":"People","grammar":"N"},"Dyrf":{"definition_en":"Farm","grammar":"N"},"Dyrst":{"definition_en":"Thirsty/Thirst","grammar":"A"},"Eidin":{"definition_en":"Oath","grammar":"N"},"Eifa":{"definition_en":"Bitter","grammar":"A"},"Elak":{"definition_en":"Elk","grammar":"N"},"Elil":{"definition_en":"Exiled/Foreign","grammar":"A"},"Ent":{"definition_en":"End","grammar":"N"},"Erna":{"definition_en":"Earnest","grammar":"A"},"Ewan":{"definition_en":"Even","grammar":"A"},"Eyha":{"definition_en":"Oak","grammar":"N"},"Eyhil":{"definition_en":"Acorn","grammar":"N"},"Eyn":{"definition_en":"One","grammar":"AN"},"Eynli":{"definition_en":"Eleven","grammar":"AN"},"Eyri":{"definition_en":"Wandering","grammar":"A"},"Edz":{"definition_en":"Eat","grammar":"V"},"Faeld":{"definition_en":"Field","grammar":"N"},"Faez":{"definition_en":"Fat","grammar":"A"},"Falk":{"definition_en":"Falcon","grammar":"N"},"Farr":{"definition_en":"Bull","grammar":"N"},"Fatyr":{"definition_en":"Father","grammar":"N"},"Fedar":{"definition_en":"Feather","grammar":"N"},"Fhet":{"definition_en":"Fight","grammar":"V"},"Fhil":{"definition_en":"Yellow","grammar":"A"},"Fhis":{"definition_en":"Fish","grammar":"N","derivatives":{"A":"Fhisk"}},"Fhruh":{"definition_en":"Early","grammar":"A"},"Fian":{"definition_en":"Enemy","grammar":"N"},"Firk":{"definition_en":"Explore","grammar":"V"},"Flaz":{"definition_en":"Flat","grammar":"A"},"Flekk":{"definition_en":"Spotted","grammar":"A"},"Floeg":{"definition_en":"Fly","grammar":"V"},"Floer":{"definition_en":"Lead","grammar":"V"},"Floh":{"definition_en":"Flea","grammar":"N"},"Foer":{"definition_en":"Four","grammar":"AN"},"Foet":{"definition_en":"Foot","grammar":"N"},"Fohc":{"definition_en":"Fox","grammar":"N"},"Folg":{"definition_en":"Bird","grammar":"N"},"Frae":{"definition_en":"Free","grammar":"A"},"Froe":{"definition_en":"Lady","grammar":"N","derivatives":{"A":"Froa"}},"Frusk":{"definition_en":"Frog","grammar":"N"},"Frut":{"definition_en":"Fruit","grammar":"N"},"Fryd":{"definition_en":"Peace/ful","grammar":"AN"},"Fryn":{"definition_en":"Friend","grammar":"N"},"Fyr":{"definition_en":"Fire","grammar":"N"},"Fyril":{"definition_en":"Lost","grammar":"A"},"Fyst":{"definition_en":"Fist","grammar":"N"},"Gaez":{"definition_en":"Goat","grammar":"N"},"Ganz":{"definition_en":"Perfect","grammar":"A"},"Gara":{"definition_en":"Skin","grammar":"N"},"Garr":{"definition_en":"Choir","grammar":"N"},"Geim":{"definition_en":"Jewel","grammar":"N"},"Geiss":{"definition_en":"Ghost","grammar":"N","derivatives":{"A":"Geyss"}},"Germa":{"definition_en":"Conjurer","grammar":"N"},"Gheb":{"definition_en":"Give","grammar":"V"},"Ghim":{"definition_en":"Modest","grammar":"A"},"Glac":{"definition_en":"Bell","grammar":"N"},"Glaz":{"definition_en":"Glass","grammar":"AN"},"Goht":{"definition_en":"God","grammar":"N"},"Gohta":{"definition_en":"Goddess","grammar":"N"},"Graeb":{"definition_en":"Grave","grammar":"N"},"Greh":{"definition_en":"Calm","grammar":"A"},"Grein":{"definition_en":"Bronze","grammar":"AN"},"Grina":{"definition_en":"Howl","grammar":"V"},"Grym":{"definition_en":"Cruel","grammar":"A"},"Gryne":{"definition_en":"Green","grammar":"AN"},"Guht":{"definition_en":"Good","grammar":"A"},"Guld":{"definition_en":"Gold","grammar":"AN"},"Guol":{"definition_en":"Glorious","grammar":"A"},"Gybal":{"definition_en":"Skull","grammar":"N"},"Gybet":{"definition_en":"Prayer","grammar":"N"},"Gyft":{"definition_en":"Sell","grammar":"V"},"Hael":{"definition_en":"Healthy","grammar":"A"},"Haemr":{"definition_en":"Hammer","grammar":"N"},"Haer":{"definition_en":"Grand","grammar":"A"},"Haerz":{"definition_en":"Heart","grammar":"N"},"Hald":{"definition_en":"Kind","grammar":"A"},"Halp":{"definition_en":"Side","grammar":"N"},"Hana":{"definition_en":"Hemp/Hempen","grammar":"AN"},"Hanth":{"definition_en":"Hand","grammar":"N"},"Harr":{"definition_en":"Hair","grammar":"N"},"Hart":{"definition_en":"Hard","grammar":"A"},"Hast":{"definition_en":"Hazel","grammar":"A","derivatives":{"A":"Hastal"}},"Helb":{"definition_en":"Half","grammar":"AN"},"Herl":{"definition_en":"Elder","grammar":"A"},"Hezz":{"definition_en":"Hot","grammar":"A"},"Himal":{"definition_en":"Sky","grammar":"N"},"Hint":{"definition_en":"Behind","grammar":"A"},"Hirsk":{"definition_en":"Agile","grammar":"A"},"Holas":{"definition_en":"Bald","grammar":"A"},"Holl":{"definition_en":"Hollow","grammar":"A"},"Holsk":{"definition_en":"Fast","grammar":"A"},"Horsk":{"definition_en":"Obedient","grammar":"A","derivatives":{"N":"Horsam"}},"Hort":{"definition_en":"Treasure","grammar":"N"},"Hund":{"definition_en":"Dog","grammar":"N","derivatives":{"A":"Hundr"}},"Hwab":{"definition_en":"Hawk","grammar":"N"},"Hwyz":{"definition_en":"Know","grammar":"V"},"Hyll":{"definition_en":"Hell","grammar":"N"},"Hylt":{"definition_en":"Forest","grammar":"N"},"Hymｌ":{"definition_en":"Heaven","grammar":"N"},"Hyr":{"definition_en":"Army","grammar":"N"},"Hyrt":{"definition_en":"Autumn","grammar":"N"},"Ingil":{"definition_en":"Angel","grammar":"N","derivatives":{"A":"Inghil"}},"Isil":{"definition_en":"Island","grammar":"N"},"Itar":{"definition_en":"Knight","grammar":"N"},"Iyrn":{"definition_en":"Iron","grammar":"AN"},"Jaeg":{"definition_en":"Hunt","grammar":"V"},"Jarr":{"definition_en":"Year","grammar":"N"},"Jho":{"definition_en":"And","grammar":"X"},"Jungh":{"definition_en":"Young","grammar":"A"},"Keim":{"definition_en":"Violet/Purple","grammar":"AN"},"Kelt":{"definition_en":"Cold","grammar":"A"},"Kest":{"definition_en":"Chestnut","grammar":"AN"},"Keten":{"definition_en":"Chain/Chained","grammar":"AN"},"Khan":{"definition_en":"Laugh","grammar":"V"},"Khezl":{"definition_en":"Kettle","grammar":"N"},"Khra":{"definition_en":"Crane","grammar":"N"},"Khus":{"definition_en":"Chaste","grammar":"A"},"Kilb":{"definition_en":"Calf","grammar":"N"},"Kirz":{"definition_en":"Candle","grammar":"N"},"Klet":{"definition_en":"Burdock","grammar":"N"},"Klin":{"definition_en":"Child","grammar":"N","derivatives":{"A":"Klind"}},"Klyn":{"definition_en":"Small","grammar":"A"},"Klyng":{"definition_en":"Brook","grammar":"N"},"Kneh":{"definition_en":"Near","grammar":"A"},"Knod":{"definition_en":"Knot/Knotty","grammar":"AN"},"Koel":{"definition_en":"Coeurl","grammar":"N"},"Koen":{"definition_en":"King","grammar":"N"},"Koena":{"definition_en":"Queen","grammar":"N","derivatives":{"A":"Koenyb"}},"Krepf":{"definition_en":"Claw","grammar":"N"},"Kroem":{"definition_en":"Bent","grammar":"A"},"Kryd":{"definition_en":"Chalk","grammar":"AN"},"Kryst":{"definition_en":"Crystal","grammar":"AN"},"Kupf":{"definition_en":"Copper","grammar":"AN"},"Kympf":{"definition_en":"Champion","grammar":"AN"},"Kynd":{"definition_en":"Virgin","grammar":"AN"},"Kyrss":{"definition_en":"Cherry","grammar":"N"},"Laent":{"definition_en":"Land","grammar":"N"},"Lago":{"definition_en":"Lament","grammar":"V"},"Lahz":{"definition_en":"Salmon","grammar":"N"},"Lamm":{"definition_en":"Lame/Injured","grammar":"A"},"Leita":{"definition_en":"Bringer","grammar":"N"},"Liht":{"definition_en":"Light","grammar":"N"},"Lleid":{"definition_en":"Pain","grammar":"N"},"Loef":{"definition_en":"Leaf","grammar":"N"},"Loet":{"definition_en":"Loud","grammar":"A"},"Loeｔr":{"definition_en":"Pure","grammar":"A"},"Loez":{"definition_en":"Short","grammar":"A"},"Loh":{"definition_en":"Cloth/Clothes","grammar":"AN"},"Lon":{"definition_en":"Gatherer","grammar":"N","derivatives":{"A":"Lona"}},"Lora":{"definition_en":"Laurel","grammar":"N"},"Lorh":{"definition_en":"Rabbit","grammar":"N"},"Loug":{"definition_en":"Leech","grammar":"N"},"Lubb":{"definition_en":"Poison","grammar":"AN","derivatives":{"A":"Lubd"}},"Lydir":{"definition_en":"Leather","grammar":"AN"},"Lyna":{"definition_en":"Linen","grammar":"A"},"Lyng":{"definition_en":"Long","grammar":"A"},"Maeti":{"definition_en":"Mighty","grammar":"A"},"Maga":{"definition_en":"Stomach","grammar":"N"},"Mann":{"definition_en":"Man","grammar":"N"},"Marm":{"definition_en":"Marble","grammar":"AN"},"Merl":{"definition_en":"Sea","grammar":"N"},"Mhar":{"definition_en":"Horse","grammar":"N"},"Mhas":{"definition_en":"Scar","grammar":"N"},"Mhol":{"definition_en":"Salamander/Eft","grammar":"N"},"Mhus":{"definition_en":"Mouse","grammar":"N"},"Moeg":{"definition_en":"Able","grammar":"A"},"Moen":{"definition_en":"Moon","grammar":"N"},"Moer":{"definition_en":"Kill","grammar":"V"},"Moht":{"definition_en":"Mind","grammar":"N"},"Murl":{"definition_en":"Wall","grammar":"N"},"Myna":{"definition_en":"Love","grammar":"N"},"Mynd":{"definition_en":"Mouth","grammar":"N"},"Myrgan":{"definition_en":"Morning","grammar":"N"},"Myst":{"definition_en":"Mistletoe","grammar":"N"},"Myte":{"definition_en":"Middle","grammar":"AN"},"Nagl":{"definition_en":"Nail","grammar":"N"},"Nahct":{"definition_en":"Night","grammar":"N"},"Nazz":{"definition_en":"Damp/Wet","grammar":"A"},"Nebb":{"definition_en":"Fog","grammar":"N"},"Nedyr":{"definition_en":"Low","grammar":"A"},"Niu":{"definition_en":"New","grammar":"A"},"Noez":{"definition_en":"Walnut","grammar":"N"},"Nort":{"definition_en":"North","grammar":"N"},"Nortyr":{"definition_en":"Northern","grammar":"A"},"Nyst":{"definition_en":"Nest","grammar":"N"},"Nyun":{"definition_en":"Nine","grammar":"AN"},"Oebb":{"definition_en":"Above","grammar":"X"},"Oefyr":{"definition_en":"Sacrifice","grammar":"N"},"Oeya":{"definition_en":"Eye","grammar":"N"},"Ofan":{"definition_en":"Clear","grammar":"A"},"Opyl":{"definition_en":"Apple","grammar":"N"},"Orn":{"definition_en":"Maple","grammar":"N"},"Ost":{"definition_en":"East","grammar":"N"},"Ostyr":{"definition_en":"Eastern","grammar":"A"},"Oura":{"definition_en":"Ear","grammar":"N"},"Pfar":{"definition_en":"Walking","grammar":"A"},"Pfef":{"definition_en":"Pepper","grammar":"N"},"Pfrew":{"definition_en":"Joy","grammar":"N"},"Pfrym":{"definition_en":"Plum","grammar":"N"},"Pfym":{"definition_en":"Five","grammar":"AN"},"Pfyn":{"definition_en":"Finger","grammar":"N"},"Phati":{"definition_en":"Late","grammar":"A"},"Rael":{"definition_en":"Doe","grammar":"N"},"Raen":{"definition_en":"Circle","grammar":"N","derivatives":{"A":"Raeng"}},"Raet":{"definition_en":"Chariot","grammar":"N"},"Ramm":{"definition_en":"Ram","grammar":"N"},"Rhen":{"definition_en":"Clean","grammar":"A"},"Rhet":{"definition_en":"Law","grammar":"N"},"Rheti":{"definition_en":"Straight/Lawful","grammar":"A"},"Rhit":{"definition_en":"Right","grammar":"A"},"Rhot":{"definition_en":"Red","grammar":"A"},"Rhyl":{"definition_en":"Plentiful","grammar":"A"},"Roegan":{"definition_en":"Rain","grammar":"N","derivatives":{"A":"Roega"}},"Roeh":{"definition_en":"Rough","grammar":"A"},"Ronth":{"definition_en":"Run","grammar":"V"},"Ronn":{"definition_en":"Current","grammar":"N"},"Rostn":{"definition_en":"Rusty","grammar":"A"},"Ruht":{"definition_en":"Smoke","grammar":"N"},"Ryhhe":{"definition_en":"Empire","grammar":"N"},"Rymm":{"definition_en":"Frost","grammar":"N"},"Ryss":{"definition_en":"Giant","grammar":"AN"},"Saelb":{"definition_en":"Sage","grammar":"N","derivatives":{"A":"Sylbei"}},"Saelz":{"definition_en":"Salt","grammar":"N"},"Saem":{"definition_en":"Seed","grammar":"N"},"Saes":{"definition_en":"Six","grammar":"AN"},"Sald":{"definition_en":"Luck","grammar":"N"},"Sath":{"definition_en":"Knife","grammar":"N"},"Satz":{"definition_en":"Dance","grammar":"N"},"Seik":{"definition_en":"Lake","grammar":"N"},"Sfeik":{"definition_en":"Lake","grammar":"N"},"Skaen":{"definition_en":"Beautiful","grammar":"A"},"Skaet":{"definition_en":"Shadow","grammar":"N"},"Skal":{"definition_en":"Servant","grammar":"N"},"Skapf":{"definition_en":"Sheep","grammar":"N"},"Skarn":{"definition_en":"Horrible","grammar":"A"},"Skoef":{"definition_en":"Poetry/Poet","grammar":"N"},"Skoen":{"definition_en":"Shining","grammar":"A"},"Skrat":{"definition_en":"Goblin","grammar":"N"},"Skrib":{"definition_en":"Write","grammar":"V"},"Skyf":{"definition_en":"Ship","grammar":"N"},"Skylt":{"definition_en":"Shield","grammar":"N"},"Slae":{"definition_en":"Dull","grammar":"A"},"Slaf":{"definition_en":"Sleeping","grammar":"A"},"Slett":{"definition_en":"Plain","grammar":"A"},"Smyd":{"definition_en":"Smith","grammar":"N"},"Snoe":{"definition_en":"Snow","grammar":"N"},"Some":{"definition_en":"Summer","grammar":"N","derivatives":{"A":"Soemr"}},"Solk":{"definition_en":"Blessed","grammar":"A"},"Spaer":{"definition_en":"Sparrow","grammar":"N"},"Spyr":{"definition_en":"Spear","grammar":"N"},"Stael":{"definition_en":"Still","grammar":"A"},"Sterr":{"definition_en":"Strong","grammar":"A"},"Sthal":{"definition_en":"Steel","grammar":"AN"},"Sthan":{"definition_en":"Stand","grammar":"V"},"Stral":{"definition_en":"Arrow","grammar":"N"},"Stymm":{"definition_en":"Voice","grammar":"N"},"Styr":{"definition_en":"Star","grammar":"N","derivatives":{"A":"Styrn"}},"Styrm":{"definition_en":"Storm","grammar":"N"},"Sund":{"definition_en":"South","grammar":"N"},"Sundyr":{"definition_en":"Southern","grammar":"A"},"Sunn":{"definition_en":"Sun","grammar":"N"},"Swaen":{"definition_en":"Mushroom","grammar":"N"},"Swar":{"definition_en":"Black","grammar":"A"},"Sweig":{"definition_en":"Herd","grammar":"NV"},"Swerd":{"definition_en":"Sword","grammar":"N"},"Swoz":{"definition_en":"Sweet","grammar":"A"},"Swyg":{"definition_en":"Silent","grammar":"A"},"Swyn":{"definition_en":"Round","grammar":"A"},"Swyr":{"definition_en":"Big","grammar":"A"},"Swys":{"definition_en":"Sister","grammar":"N","derivatives":{"A":"Swysta"}},"Sygg":{"definition_en":"Victory","grammar":"N"},"Syhr":{"definition_en":"Fearless","grammar":"A"},"Syk":{"definition_en":"Sick","grammar":"A"},"Sylb":{"definition_en":"Silver","grammar":"AN"},"Syn":{"definition_en":"Son","grammar":"N"},"Syng":{"definition_en":"Song","grammar":"N"},"Syngi":{"definition_en":"Singing","grammar":"A"},"Synt":{"definition_en":"Sand","grammar":"N"},"Syvin":{"definition_en":"Seven","grammar":"AN"},"Syz":{"definition_en":"Sit","grammar":"V"},"Syzn":{"definition_en":"Sitting","grammar":"A"},"Thor":{"definition_en":"Torn","grammar":"A"},"Thosin":{"definition_en":"Grey","grammar":"A"},"Thota":{"definition_en":"Daughter","grammar":"N"},"Thuba":{"definition_en":"Mage","grammar":"N"},"Thubyr":{"definition_en":"Magic","grammar":"AN"},"Thuv":{"definition_en":"Dove","grammar":"N"},"Toeg":{"definition_en":"Secret","grammar":"AN"},"Toff":{"definition_en":"Deep","grammar":"A"},"Toum":{"definition_en":"Dream","grammar":"N"},"Trach":{"definition_en":"Dragon","grammar":"N"},"Trachyn":{"definition_en":"Dragon","grammar":"A"},"Tragg":{"definition_en":"Slow","grammar":"A"},"Trahg":{"definition_en":"Lazy","grammar":"A"},"Troe":{"definition_en":"Confused","grammar":"A","derivatives":{"N":"Troeb"}},"Troeg":{"definition_en":"Monster","grammar":"N"},"Tu":{"definition_en":"Dew","grammar":"N"},"Twyr":{"definition_en":"Dwarf","grammar":"N"},"Tyl":{"definition_en":"Valley","grammar":"N"},"Tymb":{"definition_en":"Dumb","grammar":"A"},"Tyrb":{"definition_en":"Cyclone","grammar":"N","derivatives":{"A":"Terbin"}},"Tyrn":{"definition_en":"Tower","grammar":"N"},"Ubyl":{"definition_en":"Evil","grammar":"A"},"Ulm":{"definition_en":"Elm","grammar":"N"},"Und":{"definition_en":"Wave","grammar":"N"},"Unsyn":{"definition_en":"Innocent","grammar":"A"},"Unta":{"definition_en":"Other","grammar":"A"},"Urs":{"definition_en":"Auroch","grammar":"N"},"Usyn":{"definition_en":"Ashen","grammar":"A"},"Uwil":{"definition_en":"Owl","grammar":"N"},"Waeb":{"definition_en":"Weave","grammar":"V"},"Waek":{"definition_en":"Battle","grammar":"N"},"Waem":{"definition_en":"Warm","grammar":"A"},"Waen":{"definition_en":"Wind","grammar":"N","derivatives":{"A":"Waent"}},"Waht":{"definition_en":"Guard","grammar":"N"},"Wakk":{"definition_en":"Awake/Woken","grammar":"A"},"Wall":{"definition_en":"Boil","grammar":"V"},"Wann":{"definition_en":"Empty","grammar":"A"},"Ward":{"definition_en":"Watch","grammar":"N"},"Warg":{"definition_en":"truth","grammar":"N"},"Wast":{"definition_en":"Sharp","grammar":"A"},"Webb":{"definition_en":"Silk","grammar":"AN"},"Wegg":{"definition_en":"Provoke","grammar":"V"},"Wein":{"definition_en":"Woad","grammar":"N"},"Weitz":{"definition_en":"Wheat","grammar":"N"},"Wezzn":{"definition_en":"Punishment","grammar":"NV"},"Whas":{"definition_en":"Wax","grammar":"AN"},"Whei":{"definition_en":"Soft","grammar":"A"},"Wilf":{"definition_en":"Wolf","grammar":"N"},"Wilt":{"definition_en":"Wild","grammar":"A"},"Winst":{"definition_en":"Left","grammar":"A"},"Wint":{"definition_en":"Winter","grammar":"N"},"Wist":{"definition_en":"West","grammar":"N"},"Wistyr":{"definition_en":"Western","grammar":"A"},"Woerd":{"definition_en":"Word","grammar":"N"},"Wolk":{"definition_en":"Cloud","grammar":"N"},"Woll":{"definition_en":"Wool","grammar":"AN"},"Wunt":{"definition_en":"Under","grammar":"A"},"Wuot":{"definition_en":"Berserk","grammar":"A"},"Wurt":{"definition_en":"Herb","grammar":"N","derivatives":{"A":"Wurth"}},"Wyb":{"definition_en":"Woman","grammar":"N"},"Wyda":{"definition_en":"Willow","grammar":"N"},"Wyrk":{"definition_en":"Work","grammar":"V"},"Wyrka":{"definition_en":"Worker","grammar":"N"},"Wyrn":{"definition_en":"Snake","grammar":"N"},"Wyrst":{"definition_en":"Sausage","grammar":"N"},"Wyss":{"definition_en":"Wise","grammar":"A"},"Wyta":{"definition_en":"Water","grammar":"N"},"Wyzn":{"definition_en":"White","grammar":"A"},"Ybolg":{"definition_en":"Enraged","grammar":"A"},"Zaen":{"definition_en":"Ten","grammar":"AN"},"Zaes":{"definition_en":"Right","grammar":"A"},"Zagyl":{"definition_en":"Tail","grammar":"N"},"Zahr":{"definition_en":"Tear","grammar":"N"},"Zant":{"definition_en":"Tooth","grammar":"N"},"Zedyr":{"definition_en":"Cedar","grammar":"N"},"Zeh":{"definition_en":"Toe","grammar":"N"},"Zent":{"definition_en":"Send","grammar":"V"},"Zirn":{"definition_en":"Fury/Furious","grammar":"AN"},"Zoeng":{"definition_en":"Tongue","grammar":"N"},"Zoer":{"definition_en":"Sour","grammar":"A"},"Zwelf":{"definition_en":"Twelve","grammar":"AN"},"Zwyn":{"definition_en":"Twin","grammar":"AN"}}');
;// CONCATENATED MODULE: ./src/name-generator/ffxiv-name-generator/data/index.ts




const charaMakeNames = {
    hyur_midlander_male: chara_make_names_namespaceObject.NM,
    hyur_midlander_female: chara_make_names_namespaceObject.iC,
    hyur_midlander_lastName: chara_make_names_namespaceObject.Sc,
    hyur_highlander_male: chara_make_names_namespaceObject.UZ,
    hyur_highlander_female: chara_make_names_namespaceObject.qb,
    hyur_highlander_lastName: chara_make_names_namespaceObject.EQ,
    elezen_male: chara_make_names_namespaceObject.jC,
    elezen_female: chara_make_names_namespaceObject.Vm,
    elezen_wildwood_lastName: chara_make_names_namespaceObject.qW,
    elezen_duskwight_lastName: chara_make_names_namespaceObject.ld,
    lalafell_plainsfolk_firstNameStart: chara_make_names_namespaceObject.kB,
    lalafell_plainsfolk_lastNameStart: chara_make_names_namespaceObject.o0,
    lalafell_plainsfolk_endOfNames: chara_make_names_namespaceObject.wY,
    lalafell_dunesfolk_male: chara_make_names_namespaceObject.O2,
    lalafell_dunesfolk_male_lastName: chara_make_names_namespaceObject.Vp,
    lalafell_dunesfolk_female: chara_make_names_namespaceObject.RR,
    lalafell_dunesfolk_female_lastName: chara_make_names_namespaceObject.Sh,
    miqote_seekerOfTheSun_male: chara_make_names_namespaceObject.Kc,
    miqote_seekerOfTheSun_female: chara_make_names_namespaceObject.u,
    miqote_seekerOfTheSun_male_lastName: chara_make_names_namespaceObject.zV,
    miqote_seekerOfTheSun_female_lastName: chara_make_names_namespaceObject.Mc,
    miqote_keeperOfTheMoon_male: chara_make_names_namespaceObject.ZB,
    miqote_keeperOfTheMoon_female: chara_make_names_namespaceObject.O5,
    miqote_keeperOfTheMoon_lastName: chara_make_names_namespaceObject.fR,
    roegadyn_seaWolf_male: chara_make_names_namespaceObject.qj,
    roegadyn_seaWolf_male_lastName: chara_make_names_namespaceObject.st,
    roegadyn_seaWolf_female: chara_make_names_namespaceObject.vE,
    roegadyn_seaWolf_female_lastName: chara_make_names_namespaceObject.qw,
    roegadyn_hellsguard_firstName: chara_make_names_namespaceObject.$C,
    roegadyn_hellsguard_male_lastName: chara_make_names_namespaceObject.ye,
    roegadyn_hellsguard_female_lastName: chara_make_names_namespaceObject.Hv,
    auRa_raen_male: chara_make_names_namespaceObject.XO,
    auRa_raen_female: chara_make_names_namespaceObject.FH,
    auRa_raen_lastName: chara_make_names_namespaceObject.k2,
    auRa_xaela_male: chara_make_names_namespaceObject.Gg,
    auRa_xaela_female: chara_make_names_namespaceObject.NZ,
    auRa_xaela_lastName: chara_make_names_namespaceObject.FF,
    hrothgar_helions_firstName: chara_make_names_namespaceObject.Zp,
    hrothgar_helions_lastName: chara_make_names_namespaceObject.nP,
    hrothgar_theLost_firstName: chara_make_names_namespaceObject.bM,
    hrothgar_theLost_lastName: chara_make_names_namespaceObject.C8,
    viera_firstName: chara_make_names_namespaceObject.J3,
    viera_rava_lastName: chara_make_names_namespaceObject.sM,
    viera_veena_lastName: chara_make_names_namespaceObject.fP
};
const miqoteSuffixes = miqote_suffixes_namespaceObject;
const miqoteTribes = miqote_tribes_namespaceObject;
const roegadynDictionary = roegadyn_dictionary_namespaceObject;

;// CONCATENATED MODULE: ./src/name-generator/ffxiv-name-generator/locales/en.json
const en_namespaceObject = JSON.parse('{"race":{"hyur":"Hyur","elezen":"Elezen","lalafell":"Lalafell","miqote":"Miqo’te","roegadyn":"Roegadyn","auRa":"Au Ra","hrothgar":"Hrothgar","viera":"Viera"},"clan":{"midlander":"Midlander","highlander":"Highlander","wildwood":"Wildwood","duskwight":"Duskwight","plainsfolk":"Plainsfolk","dunesfolk":"Dunesfolk","seekerOfTheSun":"Seeker of the Sun","keeperOfTheMoon":"Keeper of the Moon","seaWolf":"Sea Wolf","hellsguard":"Hellsguard","raen":"Raen","xaela":"Xaela","helions":"Helions","theLost":"The Lost","rava":"Rava","veena":"Veena"},"gender":{"male":"Male","female":"Female"}}');
;// CONCATENATED MODULE: ./src/name-generator/ffxiv-name-generator/locales/de.json
const de_namespaceObject = JSON.parse('{"race":{"hyur":"Hyuran","elezen":"Elezen","lalafell":"Lalafell","miqote":"Miqo’te","roegadyn":"Roegadyn","auRa":"Au Ra","hrothgar":"Hrothgar","viera":"Viera"},"clan":{"midlander":"Wiesländer","highlander":"Hochländer","wildwood":"Erlschatten","duskwight":"Dunkelalb","plainsfolk":"Halmling","dunesfolk":"Sandling","seekerOfTheSun":"Goldtatze","keeperOfTheMoon":"Mondstreuner","seaWolf":"Seewolf","hellsguard":"Lohengarde","raen":"Raen","xaela":"Xaela","helions":"Helions","theLost":"Losgesagter","rava":"Rava","veena":"Veena"},"gender":{"male":"Männliche","female":"Weibliche"}}');
;// CONCATENATED MODULE: ./src/name-generator/ffxiv-name-generator/locales/fr.json
const fr_namespaceObject = JSON.parse('{"race":{"hyur":"Hyur","elezen":"Élézen","lalafell":"Lalafell","miqote":"Miqo’te","roegadyn":"Roegadyn","auRa":"Ao Ra","hrothgar":"Hrothgar","viera":"Viéra"},"clan":{"midlander":"Hyurois","highlander":"Hyurgoth","wildwood":"Sylvestre","duskwight":"Crépusculaire","plainsfolk":"Peuple des Plaines","dunesfolk":"Peuple des Dunes","seekerOfTheSun":"Tribu du Soleil","keeperOfTheMoon":"Tribu de la Lune","seaWolf":"Clan de la Mer","hellsguard":"Clan du Feu","raen":"Raen","xaela":"Xaela","helions":"Hélion","theLost":"Éloigné","rava":"Rava","veena":"Veena"},"gender":{"male":"Mâle","female":"Femelle"}}');
;// CONCATENATED MODULE: ./src/name-generator/ffxiv-name-generator/locales/ja.json
const ja_namespaceObject = JSON.parse('{"race":{"hyur":"ヒューラン","elezen":"エレゼン","lalafell":"ララフェル","miqote":"ミコッテ","roegadyn":"ルガディン","auRa":"アウラ","hrothgar":"ロスガル","viera":"ヴィエラ"},"clan":{"midlander":"ミッドランダー ","highlander":"ハイランダー","wildwood":"フォレスター","duskwight":"シェーダー","plainsfolk":"プレーンフォーク","dunesfolk":"デューンフォーク","seekerOfTheSun":"サンシーカー","keeperOfTheMoon":"ムーンキーパー","seaWolf":"ゼーヴォルフ","hellsguard":"ローエンガルデ","raen":"レン","xaela":"ゼラ","helions":"ヘリオン","theLost":"ロスト","rava":"ラヴァ","veena":"ヴィナ"},"gender":{"male":"雄","female":"雌"}}');
;// CONCATENATED MODULE: ./src/name-generator/ffxiv-name-generator/locales/cn.json
const cn_namespaceObject = JSON.parse('{"race":{"hyur":"人族","elezen":"精灵族","lalafell":"拉拉菲尔族","miqote":"猫魅族","roegadyn":"鲁加族","auRa":"敖龙族","hrothgar":"硌狮族","viera":"维埃拉族"},"clan":{"midlander":"中原之民","highlander":"高地之民","wildwood":"森林之民","duskwight":"黑影之民","plainsfolk":"平原之民","dunesfolk":"沙漠之民","seekerOfTheSun":"逐日之民","keeperOfTheMoon":"护月之民","seaWolf":"北洋之民","hellsguard":"红焰之民","raen":"晨曦之民","xaela":"暮晖之民","helions":"掠日之民","theLost":"迷踪之民","rava":"密林之民","veena":"山林之民"},"gender":{"male":"男性","female":"女性"}}');
;// CONCATENATED MODULE: ./src/name-generator/ffxiv-name-generator/locales/ko.json
const ko_namespaceObject = JSON.parse('{"race":{"hyur":"휴런","elezen":"엘레젠","lalafell":"라라펠","miqote":"미코테","roegadyn":"루가딘","auRa":"아우라","hrothgar":"로스가르","viera":"비에라"},"clan":{"midlander":"중원 부족","highlander":"고원 부족","wildwood":"숲 부족","duskwight":"황혼 부족","plainsfolk":"평원 부족","dunesfolk":"사막 부족","seekerOfTheSun":"태양의 추종자","keeperOfTheMoon":"달의 수호자","seaWolf":"바다늑대","hellsguard":"불꽃지킴이","raen":"아우라 렌","xaela":"아우라 젤라","helions":"맴도는 별","theLost":"떠도는 별","rava":"라바 비에라","veena":"비나 비에라"},"gender":{"male":"남성","female":"여성"}}');
;// CONCATENATED MODULE: ./src/name-generator/ffxiv-name-generator/src/utils.ts







const LOCALES = {
    en: en_namespaceObject,
    de: de_namespaceObject,
    fr: fr_namespaceObject,
    ja: ja_namespaceObject,
    cn: cn_namespaceObject,
    ko: ko_namespaceObject
};
function randomElement(...arrays) {
    if (arrays.length === 1) {
        return arrays[0][Math.floor(Math.random() * arrays[0].length)];
    } else {
        const totalElements = arrays.reduce((acc, curr)=>acc + curr.length
        , 0);
        const index = Math.floor(Math.random() * totalElements);
        let currIndex = 0;
        for (const array of arrays){
            currIndex += array.length;
            if (currIndex > index) {
                return array[array.length + index - currIndex];
            }
        }
    }
    return arrays[0][0];
}
function upperFirst(string) {
    string = string.replace(/[^a-z'-]/ig, "");
    if (string.length === 0) return "";
    return string[0].toUpperCase() + string.slice(1).toLowerCase();
}
function formatName(forename, surname) {
    return (upperFirst(forename) + " " + upperFirst(surname)).trim();
}
function conjugateRoegadyn(word, grammar) {
    var ref;
    word = upperFirst(word.replace(/\s+/g, ""));
    const entry = roegadyn_dictionary_namespaceObject[word];
    // If this word does not appear in the dictionary, leave it alone
    if (entry === undefined) {
        return word;
    }
    // If this word has the conjugation listed, use it
    if (((ref = entry.derivatives) === null || ref === void 0 ? void 0 : ref[grammar]) !== undefined) {
        return entry.derivatives[grammar];
    }
    // If this word is already the requested grammar, leave it alone
    if (entry.grammar === grammar || entry.grammar === "AN") {
        return word;
    }
    // Use the N -> A rule
    if (entry.grammar === "N" && grammar === "A") {
        return word + "i";
    }
    // Use the V -> N rule
    if (entry.grammar === "V" && grammar === "N") {
        return word + "a";
    }
    // Use the V -> A rule
    if (entry.grammar === "V" && grammar === "A") {
        return word + "n";
    }
    // Do not know how to conjugate this word or grammar
    return word;
}
function combineRoegadyn(...words) {
    return upperFirst(words.map((word, index)=>{
        if (index === 0) return word;
        const previousWord = words[index - 1];
        if (word.charAt(0).toLowerCase() === previousWord.charAt(previousWord.length - 1)) {
            return word.slice(1);
        } else {
            return word;
        }
    }).join(""));
}
function translate(type, id, locale = "en") {
    var ref, ref1;
    const translation = (ref = LOCALES[locale]) === null || ref === void 0 ? void 0 : (ref1 = ref[type]) === null || ref1 === void 0 ? void 0 : ref1[id];
    return translation !== undefined ? translation : `{${type}.${id}}`;
}

;// CONCATENATED MODULE: ./src/name-generator/ffxiv-name-generator/src/types.ts
var Race;
(function(Race) {
    Race["Hyur"] = "hyur";
    Race["Elezen"] = "elezen";
    Race["Lalafell"] = "lalafell";
    Race["Miqote"] = "miqote";
    Race["Roegadyn"] = "roegadyn";
    Race["AuRa"] = "auRa";
    Race["Hrothgar"] = "hrothgar";
    Race["Viera"] = "viera";
})(Race || (Race = {}));
var Clan;
(function(Clan) {
    Clan["Midlander"] = "midlander";
    Clan["Highlander"] = "highlander";
    Clan["Wildwood"] = "wildwood";
    Clan["Duskwight"] = "duskwight";
    Clan["Plainsfolk"] = "plainsfolk";
    Clan["Dunesfolk"] = "dunesfolk";
    Clan["SeekerOfTheSun"] = "seekerOfTheSun";
    Clan["KeeperOfTheMoon"] = "keeperOfTheMoon";
    Clan["SeaWolf"] = "seaWolf";
    Clan["Hellsguard"] = "hellsguard";
    Clan["Raen"] = "raen";
    Clan["Xaela"] = "xaela";
    Clan["Helions"] = "helions";
    Clan["TheLost"] = "theLost";
    Clan["Rava"] = "rava";
    Clan["Veena"] = "veena";
})(Clan || (Clan = {}));
var Gender;
(function(Gender) {
    Gender["Male"] = "male";
    Gender["Female"] = "female";
})(Gender || (Gender = {}));

;// CONCATENATED MODULE: ./src/name-generator/ffxiv-name-generator/src/generate.ts



const GENERATORS = {
    [Clan.Midlander]: {
        [Gender.Male]: ()=>{
            const forename = randomElement(charaMakeNames.hyur_midlander_male);
            const surname = randomElement(charaMakeNames.hyur_midlander_lastName);
            return formatName(forename, surname);
        },
        [Gender.Female]: ()=>{
            const forename = randomElement(charaMakeNames.hyur_midlander_female);
            const surname = randomElement(charaMakeNames.hyur_midlander_lastName);
            return formatName(forename, surname);
        }
    },
    [Clan.Highlander]: {
        [Gender.Male]: ()=>{
            const forename = randomElement(charaMakeNames.hyur_highlander_male);
            const surname = randomElement(charaMakeNames.hyur_highlander_lastName);
            return formatName(forename, surname);
        },
        [Gender.Female]: ()=>{
            const forename = randomElement(charaMakeNames.hyur_highlander_female);
            const surname = randomElement(charaMakeNames.hyur_highlander_lastName);
            return formatName(forename, surname);
        }
    },
    [Clan.Wildwood]: {
        [Gender.Male]: ()=>{
            const forename = randomElement(charaMakeNames.elezen_male);
            const surname = randomElement(charaMakeNames.elezen_wildwood_lastName);
            return formatName(forename, surname);
        },
        [Gender.Female]: ()=>{
            const forename = randomElement(charaMakeNames.elezen_female);
            const surname = randomElement(charaMakeNames.elezen_wildwood_lastName);
            return formatName(forename, surname);
        }
    },
    [Clan.Duskwight]: {
        [Gender.Male]: ()=>{
            const forename = randomElement(charaMakeNames.elezen_male);
            const surname = randomElement(charaMakeNames.elezen_duskwight_lastName);
            return formatName(forename, surname);
        },
        [Gender.Female]: ()=>{
            const forename = randomElement(charaMakeNames.elezen_female);
            const surname = randomElement(charaMakeNames.elezen_duskwight_lastName);
            return formatName(forename, surname);
        }
    },
    [Clan.Plainsfolk]: {
        [Gender.Male]: ()=>{
            const phonemeA = randomElement(charaMakeNames.lalafell_plainsfolk_firstNameStart);
            const phonemeB = randomElement(charaMakeNames.lalafell_plainsfolk_endOfNames);
            const phonemeC = randomElement(charaMakeNames.lalafell_plainsfolk_lastNameStart);
            return formatName(phonemeA + phonemeB, phonemeC + phonemeB);
        },
        [Gender.Female]: ()=>{
            const phonemeA = randomElement(charaMakeNames.lalafell_plainsfolk_firstNameStart);
            const phonemeB = randomElement(charaMakeNames.lalafell_plainsfolk_endOfNames);
            return formatName(phonemeA + phonemeB + phonemeB, phonemeA + phonemeB);
        }
    },
    [Clan.Dunesfolk]: {
        [Gender.Male]: ()=>{
            const phonemeAA = randomElement(charaMakeNames.lalafell_dunesfolk_male);
            const phonemeB = randomElement(charaMakeNames.lalafell_dunesfolk_male_lastName);
            const phonemeCC = randomElement(charaMakeNames.lalafell_dunesfolk_male);
            return formatName(phonemeAA + phonemeB, phonemeCC + phonemeB);
        },
        [Gender.Female]: ()=>{
            const phonemeA = randomElement(charaMakeNames.lalafell_dunesfolk_female);
            const phonemeB = randomElement(charaMakeNames.lalafell_dunesfolk_female_lastName);
            return formatName(phonemeA + phonemeA + phonemeB, phonemeA + phonemeB);
        }
    },
    [Clan.SeekerOfTheSun]: {
        [Gender.Male]: ()=>{
            const forename = randomElement(charaMakeNames.miqote_seekerOfTheSun_male);
            const surname = randomElement(charaMakeNames.miqote_seekerOfTheSun_male_lastName);
            return formatName(forename, surname);
        },
        [Gender.Female]: ()=>{
            const forename = randomElement(charaMakeNames.miqote_seekerOfTheSun_female);
            const surname = randomElement(charaMakeNames.miqote_seekerOfTheSun_female_lastName);
            return formatName(forename, surname);
        }
    },
    [Clan.KeeperOfTheMoon]: {
        [Gender.Male]: ()=>{
            const forename = randomElement(charaMakeNames.miqote_keeperOfTheMoon_male);
            const surname = randomElement(charaMakeNames.miqote_keeperOfTheMoon_lastName);
            return formatName(forename, surname);
        },
        [Gender.Female]: ()=>{
            const forename = randomElement(charaMakeNames.miqote_keeperOfTheMoon_female);
            const surname = randomElement(charaMakeNames.miqote_keeperOfTheMoon_lastName);
            return formatName(forename, surname);
        }
    },
    [Clan.SeaWolf]: {
        [Gender.Male]: ()=>{
            const forename = randomElement(charaMakeNames.roegadyn_seaWolf_male);
            const surname = randomElement(charaMakeNames.roegadyn_seaWolf_male_lastName);
            return formatName(forename, surname);
        },
        [Gender.Female]: ()=>{
            const forename = randomElement(charaMakeNames.roegadyn_seaWolf_female);
            const surname = randomElement(charaMakeNames.roegadyn_seaWolf_female_lastName);
            return formatName(forename, surname);
        }
    },
    [Clan.Hellsguard]: {
        [Gender.Male]: ()=>{
            const forename = randomElement(charaMakeNames.roegadyn_hellsguard_firstName);
            const surname = randomElement(charaMakeNames.roegadyn_hellsguard_male_lastName);
            return formatName(forename, surname);
        },
        [Gender.Female]: ()=>{
            const forename = randomElement(charaMakeNames.roegadyn_hellsguard_firstName);
            const surname = randomElement(charaMakeNames.roegadyn_hellsguard_female_lastName);
            return formatName(forename, surname);
        }
    },
    [Clan.Raen]: {
        [Gender.Male]: ()=>{
            const forename = randomElement(charaMakeNames.auRa_raen_male);
            const surname = randomElement(charaMakeNames.auRa_raen_lastName);
            return formatName(forename, surname);
        },
        [Gender.Female]: ()=>{
            const forename = randomElement(charaMakeNames.auRa_raen_female);
            const surname = randomElement(charaMakeNames.auRa_raen_lastName);
            return formatName(forename, surname);
        }
    },
    [Clan.Xaela]: {
        [Gender.Male]: ()=>{
            const forename = randomElement(charaMakeNames.auRa_xaela_male);
            const surname = randomElement(charaMakeNames.auRa_xaela_lastName);
            return formatName(forename, surname);
        },
        [Gender.Female]: ()=>{
            const forename = randomElement(charaMakeNames.auRa_xaela_female);
            const surname = randomElement(charaMakeNames.auRa_xaela_lastName);
            return formatName(forename, surname);
        }
    },
    [Clan.Helions]: {
        [Gender.Male]: ()=>{
            const forename = randomElement(charaMakeNames.hrothgar_helions_firstName);
            const surname = randomElement(charaMakeNames.hrothgar_helions_lastName);
            return formatName(forename, surname);
        },
        [Gender.Female]: ()=>{
            throw new Error(`Cannot generate: ${Clan.Helions} ${Gender.Female}`);
        }
    },
    [Clan.TheLost]: {
        [Gender.Male]: ()=>{
            const forename = randomElement(charaMakeNames.hrothgar_theLost_firstName);
            const surname = randomElement(charaMakeNames.hrothgar_theLost_lastName);
            return formatName(forename, surname);
        },
        [Gender.Female]: ()=>{
            throw new Error(`Cannot generate: ${Clan.TheLost} ${Gender.Female}`);
        }
    },
    [Clan.Rava]: {
        [Gender.Male]: ()=>{
            throw new Error(`Cannot generate: ${Clan.Rava} ${Gender.Male}`);
        },
        [Gender.Female]: ()=>{
            const forename = randomElement(charaMakeNames.viera_firstName);
            const surname = randomElement(charaMakeNames.viera_rava_lastName);
            return formatName(forename, surname);
        }
    },
    [Clan.Veena]: {
        [Gender.Male]: ()=>{
            throw new Error(`Cannot generate: ${Clan.Veena} ${Gender.Male}`);
        },
        [Gender.Female]: ()=>{
            const forename = randomElement(charaMakeNames.viera_firstName);
            const surname = randomElement(charaMakeNames.viera_veena_lastName);
            return formatName(forename, surname);
        }
    }
};
function generate(clan, gender) {
    return GENERATORS[clan][gender]();
};

;// CONCATENATED MODULE: ./src/name-generator/ffxiv-name-generator/src/races.ts

const RACES = [
    Race.Hyur,
    Race.Elezen,
    Race.Lalafell,
    Race.Miqote,
    Race.Roegadyn,
    Race.AuRa,
    Race.Hrothgar,
    Race.Viera
];
const CLANS = {
    [Race.Hyur]: [
        Clan.Midlander,
        Clan.Highlander
    ],
    [Race.Elezen]: [
        Clan.Wildwood,
        Clan.Duskwight
    ],
    [Race.Lalafell]: [
        Clan.Plainsfolk,
        Clan.Dunesfolk
    ],
    [Race.Miqote]: [
        Clan.SeekerOfTheSun,
        Clan.KeeperOfTheMoon
    ],
    [Race.Roegadyn]: [
        Clan.SeaWolf,
        Clan.Hellsguard
    ],
    [Race.AuRa]: [
        Clan.Raen,
        Clan.Xaela
    ],
    [Race.Hrothgar]: [
        Clan.Helions,
        Clan.TheLost
    ],
    [Race.Viera]: [
        Clan.Rava,
        Clan.Veena
    ]
};
function getRaces() {
    return RACES;
}
function getClans(race) {
    return CLANS[race];
}
function getGenders(race) {
    switch(race){
        case Race.Hrothgar:
            return [
                Gender.Male
            ];
        case Race.Viera:
            return [
                Gender.Female
            ];
        default:
            return [
                Gender.Male,
                Gender.Female
            ];
    }
}

;// CONCATENATED MODULE: ./src/name-generator/ffxiv-name-generator/index.ts





;// CONCATENATED MODULE: ./src/name-generator/MidlanderMale.tsx











const MidlanderMale = ()=>{
    const { t , i18n  } = (0,external_next_i18next_.useTranslation)("name-generator");
    const { 0: forename , 1: setForename  } = (0,external_react_.useState)("");
    const { 0: surname , 1: setSurname  } = (0,external_react_.useState)("");
    const name = formatName(forename, surname);
    const locale = i18n.language;
    return /*#__PURE__*/ jsx_runtime_.jsx(Section/* default */.Z, {
        title: `${translate("clan", Clan.Midlander, locale)} (${translate("gender", Gender.Male, locale)})`,
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)((Grid_default()), {
            container: true,
            spacing: 2,
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx((Grid_default()), {
                    item: true,
                    xs: 12,
                    md: 6,
                    children: /*#__PURE__*/ jsx_runtime_.jsx(name_generator_NameAutocomplete, {
                        options: charaMakeNames.hyur_midlander_male,
                        value: forename,
                        onChange: setForename,
                        label: t("forename"),
                        placeholder: t("enterForename")
                    })
                }),
                /*#__PURE__*/ jsx_runtime_.jsx((Grid_default()), {
                    item: true,
                    xs: 12,
                    md: 6,
                    children: /*#__PURE__*/ jsx_runtime_.jsx((Typography_default()), {
                        paragraph: true,
                        children: "Forenames are similar to Anglo Saxon, Celtic, and Briton names of medieval Europe."
                    })
                }),
                /*#__PURE__*/ jsx_runtime_.jsx((Grid_default()), {
                    item: true,
                    xs: 12,
                    md: 6,
                    children: /*#__PURE__*/ jsx_runtime_.jsx(name_generator_NameAutocomplete, {
                        options: charaMakeNames.hyur_midlander_lastName,
                        value: surname,
                        onChange: setSurname,
                        label: t("surname"),
                        placeholder: t("enterSurname")
                    })
                }),
                /*#__PURE__*/ jsx_runtime_.jsx((Grid_default()), {
                    item: true,
                    xs: 12,
                    md: 6,
                    children: /*#__PURE__*/ jsx_runtime_.jsx((Typography_default()), {
                        paragraph: true,
                        children: "Surnames are usually based off of professions (e.g. \u201CBaker\u201D), locations where families lived (e.g. \u201CMoore\u201D), or outward features (e.g. \u201CBrowne\u201D)."
                    })
                }),
                name.length > 0 && /*#__PURE__*/ jsx_runtime_.jsx((Grid_default()), {
                    item: true,
                    xs: 12,
                    children: /*#__PURE__*/ jsx_runtime_.jsx(name_generator_MyNameIs, {
                        name: name
                    })
                })
            ]
        })
    });
};
/* harmony default export */ const name_generator_MidlanderMale = (MidlanderMale);

;// CONCATENATED MODULE: ./src/name-generator/MidlanderFemale.tsx











const MidlanderFemale = ()=>{
    const { t , i18n  } = (0,external_next_i18next_.useTranslation)("name-generator");
    const { 0: forename , 1: setForename  } = (0,external_react_.useState)("");
    const { 0: surname , 1: setSurname  } = (0,external_react_.useState)("");
    const name = formatName(forename, surname);
    const locale = i18n.language;
    return /*#__PURE__*/ jsx_runtime_.jsx(Section/* default */.Z, {
        title: `${translate("clan", Clan.Midlander, locale)} (${translate("gender", Gender.Female, locale)})`,
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)((Grid_default()), {
            container: true,
            spacing: 2,
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx((Grid_default()), {
                    item: true,
                    xs: 12,
                    md: 6,
                    children: /*#__PURE__*/ jsx_runtime_.jsx(name_generator_NameAutocomplete, {
                        options: charaMakeNames.hyur_midlander_female,
                        value: forename,
                        onChange: setForename,
                        label: t("forename"),
                        placeholder: t("enterForename")
                    })
                }),
                /*#__PURE__*/ jsx_runtime_.jsx((Grid_default()), {
                    item: true,
                    xs: 12,
                    md: 6,
                    children: /*#__PURE__*/ jsx_runtime_.jsx((Typography_default()), {
                        paragraph: true,
                        children: "Forenames are similar to Anglo Saxon, Celtic, and Briton names of medieval Europe."
                    })
                }),
                /*#__PURE__*/ jsx_runtime_.jsx((Grid_default()), {
                    item: true,
                    xs: 12,
                    md: 6,
                    children: /*#__PURE__*/ jsx_runtime_.jsx(name_generator_NameAutocomplete, {
                        options: charaMakeNames.hyur_midlander_lastName,
                        value: surname,
                        onChange: setSurname,
                        label: t("surname"),
                        placeholder: t("enterSurname")
                    })
                }),
                /*#__PURE__*/ jsx_runtime_.jsx((Grid_default()), {
                    item: true,
                    xs: 12,
                    md: 6,
                    children: /*#__PURE__*/ jsx_runtime_.jsx((Typography_default()), {
                        paragraph: true,
                        children: "Surnames are usually based off of professions (e.g. \u201CBaker\u201D), locations where families lived (e.g. \u201CMoore\u201D), or outward features (e.g. \u201CBrowne\u201D)."
                    })
                }),
                name.length > 0 && /*#__PURE__*/ jsx_runtime_.jsx((Grid_default()), {
                    item: true,
                    xs: 12,
                    children: /*#__PURE__*/ jsx_runtime_.jsx(name_generator_MyNameIs, {
                        name: name
                    })
                })
            ]
        })
    });
};
/* harmony default export */ const name_generator_MidlanderFemale = (MidlanderFemale);

;// CONCATENATED MODULE: ./src/name-generator/HighlanderMale.tsx











const HighlanderMale = ()=>{
    const { t , i18n  } = (0,external_next_i18next_.useTranslation)("name-generator");
    const { 0: forename , 1: setForename  } = (0,external_react_.useState)("");
    const { 0: surname , 1: setSurname  } = (0,external_react_.useState)("");
    const name = formatName(forename, surname);
    const locale = i18n.language;
    return /*#__PURE__*/ jsx_runtime_.jsx(Section/* default */.Z, {
        title: `${translate("clan", Clan.Highlander, locale)} (${translate("gender", Gender.Male, locale)})`,
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)((Grid_default()), {
            container: true,
            spacing: 2,
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx((Grid_default()), {
                    item: true,
                    xs: 12,
                    md: 6,
                    children: /*#__PURE__*/ jsx_runtime_.jsx(name_generator_NameAutocomplete, {
                        options: charaMakeNames.hyur_highlander_male,
                        value: forename,
                        onChange: setForename,
                        label: t("forename"),
                        placeholder: t("enterForename")
                    })
                }),
                /*#__PURE__*/ jsx_runtime_.jsx((Grid_default()), {
                    item: true,
                    xs: 12,
                    md: 6,
                    children: /*#__PURE__*/ jsx_runtime_.jsx((Typography_default()), {
                        paragraph: true,
                        children: "Forenames are similar to Germanic and Normandic names of medieval Europe."
                    })
                }),
                /*#__PURE__*/ jsx_runtime_.jsx((Grid_default()), {
                    item: true,
                    xs: 12,
                    md: 6,
                    children: /*#__PURE__*/ jsx_runtime_.jsx(name_generator_NameAutocomplete, {
                        options: charaMakeNames.hyur_highlander_lastName,
                        value: surname,
                        onChange: setSurname,
                        label: t("surname"),
                        placeholder: t("enterSurname")
                    })
                }),
                /*#__PURE__*/ jsx_runtime_.jsx((Grid_default()), {
                    item: true,
                    xs: 12,
                    md: 6,
                    children: /*#__PURE__*/ jsx_runtime_.jsx((Typography_default()), {
                        paragraph: true,
                        children: "As a warring clan, surnames are often violent nicknames earned during battle."
                    })
                }),
                name.length > 0 && /*#__PURE__*/ jsx_runtime_.jsx((Grid_default()), {
                    item: true,
                    xs: 12,
                    children: /*#__PURE__*/ jsx_runtime_.jsx(name_generator_MyNameIs, {
                        name: name
                    })
                })
            ]
        })
    });
};
/* harmony default export */ const name_generator_HighlanderMale = (HighlanderMale);

;// CONCATENATED MODULE: ./src/name-generator/HighlanderFemale.tsx











const HighlanderFemale = ()=>{
    const { t , i18n  } = (0,external_next_i18next_.useTranslation)("name-generator");
    const { 0: forename , 1: setForename  } = (0,external_react_.useState)("");
    const { 0: surname , 1: setSurname  } = (0,external_react_.useState)("");
    const name = formatName(forename, surname);
    const locale = i18n.language;
    return /*#__PURE__*/ jsx_runtime_.jsx(Section/* default */.Z, {
        title: `${translate("clan", Clan.Highlander, locale)} (${translate("gender", Gender.Female, locale)})`,
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)((Grid_default()), {
            container: true,
            spacing: 2,
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx((Grid_default()), {
                    item: true,
                    xs: 12,
                    md: 6,
                    children: /*#__PURE__*/ jsx_runtime_.jsx(name_generator_NameAutocomplete, {
                        options: charaMakeNames.hyur_highlander_female,
                        value: forename,
                        onChange: setForename,
                        label: t("forename"),
                        placeholder: t("enterForename")
                    })
                }),
                /*#__PURE__*/ jsx_runtime_.jsx((Grid_default()), {
                    item: true,
                    xs: 12,
                    md: 6,
                    children: /*#__PURE__*/ jsx_runtime_.jsx((Typography_default()), {
                        paragraph: true,
                        children: "Forenames are similar to Germanic and Normandic names of medieval Europe."
                    })
                }),
                /*#__PURE__*/ jsx_runtime_.jsx((Grid_default()), {
                    item: true,
                    xs: 12,
                    md: 6,
                    children: /*#__PURE__*/ jsx_runtime_.jsx(name_generator_NameAutocomplete, {
                        options: charaMakeNames.hyur_highlander_lastName,
                        value: surname,
                        onChange: setSurname,
                        label: t("surname"),
                        placeholder: t("enterSurname")
                    })
                }),
                /*#__PURE__*/ jsx_runtime_.jsx((Grid_default()), {
                    item: true,
                    xs: 12,
                    md: 6,
                    children: /*#__PURE__*/ jsx_runtime_.jsx((Typography_default()), {
                        paragraph: true,
                        children: "As a warring clan, surnames are often violent nicknames earned during battle."
                    })
                }),
                name.length > 0 && /*#__PURE__*/ jsx_runtime_.jsx((Grid_default()), {
                    item: true,
                    xs: 12,
                    children: /*#__PURE__*/ jsx_runtime_.jsx(name_generator_MyNameIs, {
                        name: name
                    })
                })
            ]
        })
    });
};
/* harmony default export */ const name_generator_HighlanderFemale = (HighlanderFemale);

;// CONCATENATED MODULE: ./src/name-generator/WildwoodMale.tsx











const WildwoodMale = ()=>{
    const { t , i18n  } = (0,external_next_i18next_.useTranslation)("name-generator");
    const { 0: forename , 1: setForename  } = (0,external_react_.useState)("");
    const { 0: surname , 1: setSurname  } = (0,external_react_.useState)("");
    const name = formatName(forename, surname);
    const locale = i18n.language;
    return /*#__PURE__*/ jsx_runtime_.jsx(Section/* default */.Z, {
        title: `${translate("clan", Clan.Wildwood, locale)} (${translate("gender", Gender.Male, locale)})`,
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)((Grid_default()), {
            container: true,
            spacing: 2,
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx((Grid_default()), {
                    item: true,
                    xs: 12,
                    md: 6,
                    children: /*#__PURE__*/ jsx_runtime_.jsx(name_generator_NameAutocomplete, {
                        options: charaMakeNames.elezen_male,
                        value: forename,
                        onChange: setForename,
                        label: t("forename"),
                        placeholder: t("enterForename")
                    })
                }),
                /*#__PURE__*/ jsx_runtime_.jsx((Grid_default()), {
                    item: true,
                    xs: 12,
                    md: 6,
                    children: /*#__PURE__*/ jsx_runtime_.jsx((Typography_default()), {
                        paragraph: true,
                        children: "Spelling and phonetic rules are similar to those of French. Male forenames are longer than female forenames and end in an \u201Cx\u201D (e.g. \u201C\u2011loix\u201D and \u201C\u2011aux\u201D) or a silent \u201Ct\u201D (e.g. \u201C\u2011mont\u201D and \u201C\u2011geant\u201D)."
                    })
                }),
                /*#__PURE__*/ jsx_runtime_.jsx((Grid_default()), {
                    item: true,
                    xs: 12,
                    md: 6,
                    children: /*#__PURE__*/ jsx_runtime_.jsx(name_generator_NameAutocomplete, {
                        options: charaMakeNames.elezen_wildwood_lastName,
                        value: surname,
                        onChange: setSurname,
                        label: t("surname"),
                        placeholder: t("enterSurname")
                    })
                }),
                /*#__PURE__*/ jsx_runtime_.jsx((Grid_default()), {
                    item: true,
                    xs: 12,
                    md: 6,
                    children: /*#__PURE__*/ jsx_runtime_.jsx((Typography_default()), {
                        paragraph: true,
                        children: "Duskwight and Wildwood Elezen will never share surnames."
                    })
                }),
                name.length > 0 && /*#__PURE__*/ jsx_runtime_.jsx((Grid_default()), {
                    item: true,
                    xs: 12,
                    children: /*#__PURE__*/ jsx_runtime_.jsx(name_generator_MyNameIs, {
                        name: name
                    })
                })
            ]
        })
    });
};
/* harmony default export */ const name_generator_WildwoodMale = (WildwoodMale);

;// CONCATENATED MODULE: ./src/name-generator/WildwoodFemale.tsx











const WildwoodFemale = ()=>{
    const { t , i18n  } = (0,external_next_i18next_.useTranslation)("name-generator");
    const { 0: forename , 1: setForename  } = (0,external_react_.useState)("");
    const { 0: surname , 1: setSurname  } = (0,external_react_.useState)("");
    const name = formatName(forename, surname);
    const locale = i18n.language;
    return /*#__PURE__*/ jsx_runtime_.jsx(Section/* default */.Z, {
        title: `${translate("clan", Clan.Wildwood, locale)} (${translate("gender", Gender.Female, locale)})`,
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)((Grid_default()), {
            container: true,
            spacing: 2,
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx((Grid_default()), {
                    item: true,
                    xs: 12,
                    md: 6,
                    children: /*#__PURE__*/ jsx_runtime_.jsx(name_generator_NameAutocomplete, {
                        options: charaMakeNames.elezen_female,
                        value: forename,
                        onChange: setForename,
                        label: t("forename"),
                        placeholder: t("enterForename")
                    })
                }),
                /*#__PURE__*/ jsx_runtime_.jsx((Grid_default()), {
                    item: true,
                    xs: 12,
                    md: 6,
                    children: /*#__PURE__*/ jsx_runtime_.jsx((Typography_default()), {
                        paragraph: true,
                        children: "Spelling and phonetic rules are similar to those of French. Female forenames are shorter than male forenames and often end in \u201C\u2011ne\u201D, \u201C\u2011ette\u201D, or \u201C\u2011elle\u201D, or extended vowels like \u201C\u2011ie\u201D."
                    })
                }),
                /*#__PURE__*/ jsx_runtime_.jsx((Grid_default()), {
                    item: true,
                    xs: 12,
                    md: 6,
                    children: /*#__PURE__*/ jsx_runtime_.jsx(name_generator_NameAutocomplete, {
                        options: charaMakeNames.elezen_wildwood_lastName,
                        value: surname,
                        onChange: setSurname,
                        label: t("surname"),
                        placeholder: t("enterSurname")
                    })
                }),
                /*#__PURE__*/ jsx_runtime_.jsx((Grid_default()), {
                    item: true,
                    xs: 12,
                    md: 6,
                    children: /*#__PURE__*/ jsx_runtime_.jsx((Typography_default()), {
                        paragraph: true,
                        children: "Duskwight and Wildwood Elezen will never share surnames."
                    })
                }),
                name.length > 0 && /*#__PURE__*/ jsx_runtime_.jsx((Grid_default()), {
                    item: true,
                    xs: 12,
                    children: /*#__PURE__*/ jsx_runtime_.jsx(name_generator_MyNameIs, {
                        name: name
                    })
                })
            ]
        })
    });
};
/* harmony default export */ const name_generator_WildwoodFemale = (WildwoodFemale);

;// CONCATENATED MODULE: ./src/name-generator/DuskwightMale.tsx











const DuskwightMale = ()=>{
    const { t , i18n  } = (0,external_next_i18next_.useTranslation)("name-generator");
    const { 0: forename , 1: setForename  } = (0,external_react_.useState)("");
    const { 0: surname , 1: setSurname  } = (0,external_react_.useState)("");
    const name = formatName(forename, surname);
    const locale = i18n.language;
    return /*#__PURE__*/ jsx_runtime_.jsx(Section/* default */.Z, {
        title: `${translate("clan", Clan.Duskwight, locale)} (${translate("gender", Gender.Male, locale)})`,
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)((Grid_default()), {
            container: true,
            spacing: 2,
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx((Grid_default()), {
                    item: true,
                    xs: 12,
                    md: 6,
                    children: /*#__PURE__*/ jsx_runtime_.jsx(name_generator_NameAutocomplete, {
                        options: charaMakeNames.elezen_male,
                        value: forename,
                        onChange: setForename,
                        label: t("forename"),
                        placeholder: t("enterForename")
                    })
                }),
                /*#__PURE__*/ jsx_runtime_.jsx((Grid_default()), {
                    item: true,
                    xs: 12,
                    md: 6,
                    children: /*#__PURE__*/ jsx_runtime_.jsx((Typography_default()), {
                        paragraph: true,
                        children: "Spelling and phonetic rules are similar to those of French. Male forenames are longer than female forenames and end in an \u201Cx\u201D (e.g. \u201C\u2011loix\u201D and \u201C\u2011aux\u201D) or a silent \u201Ct\u201D (e.g. \u201C\u2011mont\u201D and \u201C\u2011geant\u201D)."
                    })
                }),
                /*#__PURE__*/ jsx_runtime_.jsx((Grid_default()), {
                    item: true,
                    xs: 12,
                    md: 6,
                    children: /*#__PURE__*/ jsx_runtime_.jsx(name_generator_NameAutocomplete, {
                        options: charaMakeNames.elezen_duskwight_lastName,
                        value: surname,
                        onChange: setSurname,
                        label: t("surname"),
                        placeholder: t("enterSurname")
                    })
                }),
                /*#__PURE__*/ jsx_runtime_.jsx((Grid_default()), {
                    item: true,
                    xs: 12,
                    md: 6,
                    children: /*#__PURE__*/ jsx_runtime_.jsx((Typography_default()), {
                        paragraph: true,
                        children: "Duskwight and Wildwood Elezen will never share surnames."
                    })
                }),
                name.length > 0 && /*#__PURE__*/ jsx_runtime_.jsx((Grid_default()), {
                    item: true,
                    xs: 12,
                    children: /*#__PURE__*/ jsx_runtime_.jsx(name_generator_MyNameIs, {
                        name: name
                    })
                })
            ]
        })
    });
};
/* harmony default export */ const name_generator_DuskwightMale = (DuskwightMale);

;// CONCATENATED MODULE: ./src/name-generator/DuskwightFemale.tsx











const DuskwightFemale = ()=>{
    const { t , i18n  } = (0,external_next_i18next_.useTranslation)("name-generator");
    const { 0: forename , 1: setForename  } = (0,external_react_.useState)("");
    const { 0: surname , 1: setSurname  } = (0,external_react_.useState)("");
    const name = formatName(forename, surname);
    const locale = i18n.language;
    return /*#__PURE__*/ jsx_runtime_.jsx(Section/* default */.Z, {
        title: `${translate("clan", Clan.Duskwight, locale)} (${translate("gender", Gender.Female, locale)})`,
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)((Grid_default()), {
            container: true,
            spacing: 2,
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx((Grid_default()), {
                    item: true,
                    xs: 12,
                    md: 6,
                    children: /*#__PURE__*/ jsx_runtime_.jsx(name_generator_NameAutocomplete, {
                        options: charaMakeNames.elezen_female,
                        value: forename,
                        onChange: setForename,
                        label: t("forename"),
                        placeholder: t("enterForename")
                    })
                }),
                /*#__PURE__*/ jsx_runtime_.jsx((Grid_default()), {
                    item: true,
                    xs: 12,
                    md: 6,
                    children: /*#__PURE__*/ jsx_runtime_.jsx((Typography_default()), {
                        paragraph: true,
                        children: "Spelling and phonetic rules are similar to those of French. Female forenames are shorter than male forenames and often end in \u201C\u2011ne\u201D, \u201C\u2011ette\u201D, or \u201C\u2011elle\u201D, or extended vowels like \u201C\u2011ie\u201D."
                    })
                }),
                /*#__PURE__*/ jsx_runtime_.jsx((Grid_default()), {
                    item: true,
                    xs: 12,
                    md: 6,
                    children: /*#__PURE__*/ jsx_runtime_.jsx(name_generator_NameAutocomplete, {
                        options: charaMakeNames.elezen_duskwight_lastName,
                        value: surname,
                        onChange: setSurname,
                        label: t("surname"),
                        placeholder: t("enterSurname")
                    })
                }),
                /*#__PURE__*/ jsx_runtime_.jsx((Grid_default()), {
                    item: true,
                    xs: 12,
                    md: 6,
                    children: /*#__PURE__*/ jsx_runtime_.jsx((Typography_default()), {
                        paragraph: true,
                        children: "Duskwight and Wildwood Elezen will never share surnames."
                    })
                }),
                name.length > 0 && /*#__PURE__*/ jsx_runtime_.jsx((Grid_default()), {
                    item: true,
                    xs: 12,
                    children: /*#__PURE__*/ jsx_runtime_.jsx(name_generator_MyNameIs, {
                        name: name
                    })
                })
            ]
        })
    });
};
/* harmony default export */ const name_generator_DuskwightFemale = (DuskwightFemale);

;// CONCATENATED MODULE: ./src/name-generator/PlainsfolkMale.tsx











const PlainsfolkMale = ()=>{
    const { t , i18n  } = (0,external_next_i18next_.useTranslation)("name-generator");
    const { 0: phonemeA , 1: setPhonemeA  } = (0,external_react_.useState)("");
    const { 0: phonemeB , 1: setPhonemeB  } = (0,external_react_.useState)("");
    const { 0: phonemeC , 1: setPhonemeC  } = (0,external_react_.useState)("");
    const name = formatName(phonemeA + phonemeB, phonemeC + phonemeB);
    const locale = i18n.language;
    return /*#__PURE__*/ jsx_runtime_.jsx(Section/* default */.Z, {
        title: `${translate("clan", Clan.Plainsfolk, locale)} (${translate("gender", Gender.Male, locale)})`,
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)((Grid_default()), {
            container: true,
            spacing: 2,
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx((Grid_default()), {
                    item: true,
                    xs: 12,
                    md: 6,
                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)((Grid_default()), {
                        container: true,
                        spacing: 2,
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx((Grid_default()), {
                                item: true,
                                xs: 12,
                                children: /*#__PURE__*/ jsx_runtime_.jsx(name_generator_NameAutocomplete, {
                                    options: charaMakeNames.lalafell_plainsfolk_firstNameStart,
                                    value: phonemeA,
                                    onChange: setPhonemeA,
                                    label: t("phoneme", {
                                        label: "A"
                                    }),
                                    placeholder: t("enterPhoneme")
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx((Grid_default()), {
                                item: true,
                                xs: 12,
                                children: /*#__PURE__*/ jsx_runtime_.jsx(name_generator_NameAutocomplete, {
                                    options: charaMakeNames.lalafell_plainsfolk_endOfNames.map(upperFirst),
                                    value: phonemeB,
                                    onChange: setPhonemeB,
                                    label: t("phoneme", {
                                        label: "B"
                                    }),
                                    placeholder: t("enterPhoneme")
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx((Grid_default()), {
                                item: true,
                                xs: 12,
                                children: /*#__PURE__*/ jsx_runtime_.jsx(name_generator_NameAutocomplete, {
                                    options: charaMakeNames.lalafell_plainsfolk_lastNameStart,
                                    value: phonemeC,
                                    onChange: setPhonemeC,
                                    label: t("phoneme", {
                                        label: "C"
                                    }),
                                    placeholder: t("enterPhoneme")
                                })
                            })
                        ]
                    })
                }),
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)((Grid_default()), {
                    item: true,
                    xs: 12,
                    md: 6,
                    children: [
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)((Typography_default()), {
                            paragraph: true,
                            children: [
                                "Lalafellen names are ruled by rhythm, repetition, and rhyming. Male Plainsfolk names follow the phoneme pattern ",
                                /*#__PURE__*/ jsx_runtime_.jsx("b", {
                                    children: "AB CB"
                                }),
                                "."
                            ]
                        }),
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)((Typography_default()), {
                            paragraph: true,
                            children: [
                                "The ",
                                /*#__PURE__*/ jsx_runtime_.jsx("b", {
                                    children: "A"
                                }),
                                " and ",
                                /*#__PURE__*/ jsx_runtime_.jsx("b", {
                                    children: "C"
                                }),
                                " phonemes do not have to rhyme, and the ",
                                /*#__PURE__*/ jsx_runtime_.jsx("b", {
                                    children: "A"
                                }),
                                ", ",
                                /*#__PURE__*/ jsx_runtime_.jsx("b", {
                                    children: "B"
                                }),
                                ", and ",
                                /*#__PURE__*/ jsx_runtime_.jsx("b", {
                                    children: "C"
                                }),
                                " phonemes are usually limited to one or two syllables."
                            ]
                        })
                    ]
                }),
                name.length > 0 && /*#__PURE__*/ jsx_runtime_.jsx((Grid_default()), {
                    item: true,
                    xs: 12,
                    children: /*#__PURE__*/ jsx_runtime_.jsx(name_generator_MyNameIs, {
                        name: name
                    })
                })
            ]
        })
    });
};
/* harmony default export */ const name_generator_PlainsfolkMale = (PlainsfolkMale);

;// CONCATENATED MODULE: ./src/name-generator/PlainsfolkFemale.tsx











const PlainsfolkFemale = ()=>{
    const { t , i18n  } = (0,external_next_i18next_.useTranslation)("name-generator");
    const { 0: phonemeA , 1: setPhonemeA  } = (0,external_react_.useState)("");
    const { 0: phonemeB , 1: setPhonemeB  } = (0,external_react_.useState)("");
    const name = formatName(phonemeA + phonemeB + phonemeB, phonemeA + phonemeB);
    const locale = i18n.language;
    return /*#__PURE__*/ jsx_runtime_.jsx(Section/* default */.Z, {
        title: `${translate("clan", Clan.Plainsfolk, locale)} (${translate("gender", Gender.Female, locale)})`,
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)((Grid_default()), {
            container: true,
            spacing: 2,
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx((Grid_default()), {
                    item: true,
                    xs: 12,
                    md: 6,
                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)((Grid_default()), {
                        container: true,
                        spacing: 2,
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx((Grid_default()), {
                                item: true,
                                xs: 12,
                                children: /*#__PURE__*/ jsx_runtime_.jsx(name_generator_NameAutocomplete, {
                                    options: charaMakeNames.lalafell_plainsfolk_firstNameStart,
                                    value: phonemeA,
                                    onChange: setPhonemeA,
                                    label: t("phoneme", {
                                        label: "A"
                                    }),
                                    placeholder: t("enterPhoneme")
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx((Grid_default()), {
                                item: true,
                                xs: 12,
                                children: /*#__PURE__*/ jsx_runtime_.jsx(name_generator_NameAutocomplete, {
                                    options: charaMakeNames.lalafell_plainsfolk_endOfNames.map(upperFirst),
                                    value: phonemeB,
                                    onChange: setPhonemeB,
                                    label: t("phoneme", {
                                        label: "B"
                                    }),
                                    placeholder: t("enterPhoneme")
                                })
                            })
                        ]
                    })
                }),
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)((Grid_default()), {
                    item: true,
                    xs: 12,
                    md: 6,
                    children: [
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)((Typography_default()), {
                            paragraph: true,
                            children: [
                                "Lalafellen names are ruled by rhythm, repetition, and rhyming. Female Plainsfolk names follow the phoneme pattern ",
                                /*#__PURE__*/ jsx_runtime_.jsx("b", {
                                    children: "ABB AB"
                                }),
                                "."
                            ]
                        }),
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)((Typography_default()), {
                            paragraph: true,
                            children: [
                                "The ",
                                /*#__PURE__*/ jsx_runtime_.jsx("b", {
                                    children: "A"
                                }),
                                " and ",
                                /*#__PURE__*/ jsx_runtime_.jsx("b", {
                                    children: "B"
                                }),
                                " phonemes are one syllable."
                            ]
                        })
                    ]
                }),
                name.length > 0 && /*#__PURE__*/ jsx_runtime_.jsx((Grid_default()), {
                    item: true,
                    xs: 12,
                    children: /*#__PURE__*/ jsx_runtime_.jsx(name_generator_MyNameIs, {
                        name: name
                    })
                })
            ]
        })
    });
};
/* harmony default export */ const name_generator_PlainsfolkFemale = (PlainsfolkFemale);

;// CONCATENATED MODULE: ./src/name-generator/DunesfolkMale.tsx











function splitPhoneme(phoneme) {
    return phoneme.slice(0, phoneme.length / 2);
}
const DunesfolkMale = ()=>{
    const { t , i18n  } = (0,external_next_i18next_.useTranslation)("name-generator");
    const { 0: phonemeA , 1: setPhonemeA  } = (0,external_react_.useState)("");
    const { 0: phonemeB , 1: setPhonemeB  } = (0,external_react_.useState)("");
    const { 0: phonemeC , 1: setPhonemeC  } = (0,external_react_.useState)("");
    const name = formatName(phonemeA + phonemeA + phonemeB, phonemeC + phonemeC + phonemeB);
    const locale = i18n.language;
    return /*#__PURE__*/ jsx_runtime_.jsx(Section/* default */.Z, {
        title: `${translate("clan", Clan.Dunesfolk, locale)} (${translate("gender", Gender.Male, locale)})`,
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)((Grid_default()), {
            container: true,
            spacing: 2,
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx((Grid_default()), {
                    item: true,
                    xs: 12,
                    md: 6,
                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)((Grid_default()), {
                        container: true,
                        spacing: 2,
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx((Grid_default()), {
                                item: true,
                                xs: 12,
                                children: /*#__PURE__*/ jsx_runtime_.jsx(name_generator_NameAutocomplete, {
                                    options: charaMakeNames.lalafell_dunesfolk_male.map(splitPhoneme),
                                    value: phonemeA,
                                    onChange: setPhonemeA,
                                    label: t("phoneme", {
                                        label: "A"
                                    }),
                                    placeholder: t("enterPhoneme")
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx((Grid_default()), {
                                item: true,
                                xs: 12,
                                children: /*#__PURE__*/ jsx_runtime_.jsx(name_generator_NameAutocomplete, {
                                    options: charaMakeNames.lalafell_dunesfolk_male_lastName.map(upperFirst),
                                    value: phonemeB,
                                    onChange: setPhonemeB,
                                    label: t("phoneme", {
                                        label: "B"
                                    }),
                                    placeholder: t("enterPhoneme")
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx((Grid_default()), {
                                item: true,
                                xs: 12,
                                children: /*#__PURE__*/ jsx_runtime_.jsx(name_generator_NameAutocomplete, {
                                    options: charaMakeNames.lalafell_dunesfolk_male.map(splitPhoneme),
                                    value: phonemeC,
                                    onChange: setPhonemeC,
                                    label: t("phoneme", {
                                        label: "C"
                                    }),
                                    placeholder: t("enterPhoneme")
                                })
                            })
                        ]
                    })
                }),
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)((Grid_default()), {
                    item: true,
                    xs: 12,
                    md: 6,
                    children: [
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)((Typography_default()), {
                            paragraph: true,
                            children: [
                                "Lalafellen names are ruled by rhythm, repetition, and rhyming. Male Dunesfolk names follow the phoneme pattern ",
                                /*#__PURE__*/ jsx_runtime_.jsx("b", {
                                    children: "AAB CCB"
                                }),
                                "."
                            ]
                        }),
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)((Typography_default()), {
                            paragraph: true,
                            children: [
                                "The ",
                                /*#__PURE__*/ jsx_runtime_.jsx("b", {
                                    children: "A"
                                }),
                                " and ",
                                /*#__PURE__*/ jsx_runtime_.jsx("b", {
                                    children: "C"
                                }),
                                " phonemes are one syllable, and the ",
                                /*#__PURE__*/ jsx_runtime_.jsx("b", {
                                    children: "B"
                                }),
                                " phoneme is two."
                            ]
                        })
                    ]
                }),
                name.length > 0 && /*#__PURE__*/ jsx_runtime_.jsx((Grid_default()), {
                    item: true,
                    xs: 12,
                    children: /*#__PURE__*/ jsx_runtime_.jsx(name_generator_MyNameIs, {
                        name: name
                    })
                })
            ]
        })
    });
};
/* harmony default export */ const name_generator_DunesfolkMale = (DunesfolkMale);

;// CONCATENATED MODULE: ./src/name-generator/DunesfolkFemale.tsx











const DunesfolkFemale = ()=>{
    const { t , i18n  } = (0,external_next_i18next_.useTranslation)("name-generator");
    const { 0: phonemeA , 1: setPhonemeA  } = (0,external_react_.useState)("");
    const { 0: phonemeB , 1: setPhonemeB  } = (0,external_react_.useState)("");
    const name = formatName(phonemeA + phonemeA + phonemeB, phonemeA + phonemeB);
    const locale = i18n.language;
    return /*#__PURE__*/ jsx_runtime_.jsx(Section/* default */.Z, {
        title: `${translate("clan", Clan.Dunesfolk, locale)} (${translate("gender", Gender.Female, locale)})`,
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)((Grid_default()), {
            container: true,
            spacing: 2,
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx((Grid_default()), {
                    item: true,
                    xs: 12,
                    md: 6,
                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)((Grid_default()), {
                        container: true,
                        spacing: 2,
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx((Grid_default()), {
                                item: true,
                                xs: 12,
                                children: /*#__PURE__*/ jsx_runtime_.jsx(name_generator_NameAutocomplete, {
                                    options: charaMakeNames.lalafell_dunesfolk_female,
                                    value: phonemeA,
                                    onChange: setPhonemeA,
                                    label: t("phoneme", {
                                        label: "A"
                                    }),
                                    placeholder: t("enterPhoneme")
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx((Grid_default()), {
                                item: true,
                                xs: 12,
                                children: /*#__PURE__*/ jsx_runtime_.jsx(name_generator_NameAutocomplete, {
                                    options: charaMakeNames.lalafell_dunesfolk_female_lastName.map(upperFirst),
                                    value: phonemeB,
                                    onChange: setPhonemeB,
                                    label: t("phoneme", {
                                        label: "B"
                                    }),
                                    placeholder: t("enterPhoneme")
                                })
                            })
                        ]
                    })
                }),
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)((Grid_default()), {
                    item: true,
                    xs: 12,
                    md: 6,
                    children: [
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)((Typography_default()), {
                            paragraph: true,
                            children: [
                                "Lalafellen names are ruled by rhythm, repetition, and rhyming. Female Dunesfolk names follow the phoneme pattern ",
                                /*#__PURE__*/ jsx_runtime_.jsx("b", {
                                    children: "AAB AB"
                                }),
                                "."
                            ]
                        }),
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)((Typography_default()), {
                            paragraph: true,
                            children: [
                                "The ",
                                /*#__PURE__*/ jsx_runtime_.jsx("b", {
                                    children: "A"
                                }),
                                " and ",
                                /*#__PURE__*/ jsx_runtime_.jsx("b", {
                                    children: "B"
                                }),
                                " phonemes are one syllable."
                            ]
                        })
                    ]
                }),
                name.length > 0 && /*#__PURE__*/ jsx_runtime_.jsx((Grid_default()), {
                    item: true,
                    xs: 12,
                    children: /*#__PURE__*/ jsx_runtime_.jsx(name_generator_MyNameIs, {
                        name: name
                    })
                })
            ]
        })
    });
};
/* harmony default export */ const name_generator_DunesfolkFemale = (DunesfolkFemale);

;// CONCATENATED MODULE: ./src/name-generator/SeekerOfTheSunMale.tsx











const SeekersOfTheSunMale = ()=>{
    const { t , i18n  } = (0,external_next_i18next_.useTranslation)("name-generator");
    const { 0: forename , 1: setForename  } = (0,external_react_.useState)("");
    const { 0: tribe1 , 1: setTribe  } = (0,external_react_.useState)("");
    const { 0: surname , 1: setSurname  } = (0,external_react_.useState)("");
    const name1 = `${upperFirst([
        tribe1,
        forename
    ].filter((x)=>x
    ).join("'"))} ${upperFirst(surname)}`.trim();
    const locale = i18n.language;
    return /*#__PURE__*/ jsx_runtime_.jsx(Section/* default */.Z, {
        title: `${translate("clan", Clan.SeekerOfTheSun, locale)} (${translate("gender", Gender.Male, locale)})`,
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)((Grid_default()), {
            container: true,
            spacing: 2,
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx((Grid_default()), {
                    item: true,
                    xs: 12,
                    md: 6,
                    children: /*#__PURE__*/ jsx_runtime_.jsx(name_generator_NameAutocomplete, {
                        options: charaMakeNames.miqote_seekerOfTheSun_male.map((name)=>upperFirst(name.replace(/^.*'/, ""))
                        ),
                        value: forename,
                        onChange: setForename,
                        label: t("forename"),
                        placeholder: t("enterForename")
                    })
                }),
                /*#__PURE__*/ jsx_runtime_.jsx((Grid_default()), {
                    item: true,
                    xs: 12,
                    md: 6,
                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)((Typography_default()), {
                        paragraph: true,
                        children: [
                            "Most males have simple names. The extra \u201Ch\u201Ds (e.g. \u201CB",
                            /*#__PURE__*/ jsx_runtime_.jsx("b", {
                                children: "h"
                            }),
                            "ee\u201D, \u201CKuz",
                            /*#__PURE__*/ jsx_runtime_.jsx("b", {
                                children: "h"
                            }),
                            "\u201D, and \u201CPa",
                            /*#__PURE__*/ jsx_runtime_.jsx("b", {
                                children: "h"
                            }),
                            "sh\u201D) represent a slight hissing/spitting sound that are pronounced by the Miqo\u2019te and ignored by the other races."
                        ]
                    })
                }),
                /*#__PURE__*/ jsx_runtime_.jsx((Grid_default()), {
                    item: true,
                    xs: 12,
                    md: 6,
                    children: /*#__PURE__*/ jsx_runtime_.jsx(name_generator_NameAutocomplete, {
                        options: Object.keys(miqoteTribes),
                        getOptionLabel: (tribe)=>`${tribe} - ${miqoteTribes[tribe]}`
                        ,
                        value: tribe1,
                        onChange: setTribe,
                        label: t("tribe"),
                        placeholder: t("enterTribe")
                    })
                }),
                /*#__PURE__*/ jsx_runtime_.jsx((Grid_default()), {
                    item: true,
                    xs: 12,
                    md: 6,
                    children: /*#__PURE__*/ jsx_runtime_.jsx((Typography_default()), {
                        paragraph: true,
                        children: "The forename is always preceeded by a letter representing their tribe. Tribe names are based on traditional beastkin, scalekin, or cloudkin totems said to protect the tribe."
                    })
                }),
                /*#__PURE__*/ jsx_runtime_.jsx((Grid_default()), {
                    item: true,
                    xs: 12,
                    md: 6,
                    children: /*#__PURE__*/ jsx_runtime_.jsx(name_generator_NameAutocomplete, {
                        options: [
                            "Tia",
                            "Nunh"
                        ],
                        value: surname,
                        onChange: setSurname,
                        label: t("position"),
                        placeholder: t("enterPosition")
                    })
                }),
                /*#__PURE__*/ jsx_runtime_.jsx((Grid_default()), {
                    item: true,
                    xs: 12,
                    md: 6,
                    children: /*#__PURE__*/ jsx_runtime_.jsx((Typography_default()), {
                        paragraph: true,
                        children: "Males do not have surnames, as they are considered origins of new families, and will instead take on \u201CTia\u201D or \u201CNunh\u201D denoting their position within the tribe. All are born as tia and may challenge a tribe nunh to battle. If the tia is victorious, he takes the nunh\u2019s title and position as tribe breeding male. A ratio of one nunh per fifty females is average. A tia may also become a nunh by leaving to start his own tribe."
                    })
                }),
                name1.length > 0 && /*#__PURE__*/ jsx_runtime_.jsx((Grid_default()), {
                    item: true,
                    xs: 12,
                    children: /*#__PURE__*/ jsx_runtime_.jsx(name_generator_MyNameIs, {
                        name: name1
                    })
                })
            ]
        })
    });
};
/* harmony default export */ const SeekerOfTheSunMale = (SeekersOfTheSunMale);

;// CONCATENATED MODULE: ./src/name-generator/SeekerOfTheSunFemale.tsx











const SeekersOfTheSunFemale = ()=>{
    const { t , i18n  } = (0,external_next_i18next_.useTranslation)("name-generator");
    const { 0: forename , 1: setForename  } = (0,external_react_.useState)("");
    const { 0: tribe1 , 1: setTribe  } = (0,external_react_.useState)("");
    const { 0: surname , 1: setSurname  } = (0,external_react_.useState)("");
    const name1 = `${upperFirst([
        tribe1,
        forename
    ].filter((x)=>x
    ).join("'"))} ${upperFirst(surname)}`.trim();
    const locale = i18n.language;
    return /*#__PURE__*/ jsx_runtime_.jsx(Section/* default */.Z, {
        title: `${translate("clan", Clan.SeekerOfTheSun, locale)} (${translate("gender", Gender.Female, locale)})`,
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)((Grid_default()), {
            container: true,
            spacing: 2,
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx((Grid_default()), {
                    item: true,
                    xs: 12,
                    md: 6,
                    children: /*#__PURE__*/ jsx_runtime_.jsx(name_generator_NameAutocomplete, {
                        options: charaMakeNames.miqote_seekerOfTheSun_female.map((name)=>upperFirst(name.replace(/^.*'/, ""))
                        ),
                        value: forename,
                        onChange: setForename,
                        label: t("forename"),
                        placeholder: t("enterForename")
                    })
                }),
                /*#__PURE__*/ jsx_runtime_.jsx((Grid_default()), {
                    item: true,
                    xs: 12,
                    md: 6,
                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)((Typography_default()), {
                        paragraph: true,
                        children: [
                            "The extra \u201Ch\u201Ds (e.g. \u201CB",
                            /*#__PURE__*/ jsx_runtime_.jsx("b", {
                                children: "h"
                            }),
                            "ee\u201D, \u201CKuz",
                            /*#__PURE__*/ jsx_runtime_.jsx("b", {
                                children: "h"
                            }),
                            "\u201D, and \u201CPa",
                            /*#__PURE__*/ jsx_runtime_.jsx("b", {
                                children: "h"
                            }),
                            "sh\u201D) represent a slight hissing/spitting sound that are pronounced by the Miqo\u2019te and ignored by the other races."
                        ]
                    })
                }),
                /*#__PURE__*/ jsx_runtime_.jsx((Grid_default()), {
                    item: true,
                    xs: 12,
                    md: 6,
                    children: /*#__PURE__*/ jsx_runtime_.jsx(name_generator_NameAutocomplete, {
                        options: Object.keys(miqoteTribes),
                        getOptionLabel: (tribe)=>`${tribe} - ${miqoteTribes[tribe]}`
                        ,
                        value: tribe1,
                        onChange: setTribe,
                        label: t("tribe"),
                        placeholder: t("enterTribe")
                    })
                }),
                /*#__PURE__*/ jsx_runtime_.jsx((Grid_default()), {
                    item: true,
                    xs: 12,
                    md: 6,
                    children: /*#__PURE__*/ jsx_runtime_.jsx((Typography_default()), {
                        paragraph: true,
                        children: "The forename is always preceeded by a letter representing their tribe. Tribe names are based on traditional beastkin, scalekin, or cloudkin totems said to protect the tribe."
                    })
                }),
                /*#__PURE__*/ jsx_runtime_.jsx((Grid_default()), {
                    item: true,
                    xs: 12,
                    md: 6,
                    children: /*#__PURE__*/ jsx_runtime_.jsx(name_generator_NameAutocomplete, {
                        options: charaMakeNames.miqote_seekerOfTheSun_female_lastName,
                        value: surname,
                        onChange: setSurname,
                        label: t("surname"),
                        placeholder: t("enterSurname")
                    })
                }),
                /*#__PURE__*/ jsx_runtime_.jsx((Grid_default()), {
                    item: true,
                    xs: 12,
                    md: 6,
                    children: /*#__PURE__*/ jsx_runtime_.jsx((Typography_default()), {
                        paragraph: true,
                        children: "The female\u2019s surname is taken from the breeding male who sired her."
                    })
                }),
                name1.length > 0 && /*#__PURE__*/ jsx_runtime_.jsx((Grid_default()), {
                    item: true,
                    xs: 12,
                    children: /*#__PURE__*/ jsx_runtime_.jsx(name_generator_MyNameIs, {
                        name: name1
                    })
                })
            ]
        })
    });
};
/* harmony default export */ const SeekerOfTheSunFemale = (SeekersOfTheSunFemale);

;// CONCATENATED MODULE: ./src/name-generator/KeeperOfTheMoonMale.tsx











const ORDINALS = {
    1: "first",
    2: "second",
    3: "third",
    4: "fourth",
    5: "fifth",
    6: "sixth",
    7: "seventh",
    8: "eighth",
    9: "ninth",
    10: "tenth"
};
function translateSuffix(suffix) {
    return `${ORDINALS[miqoteSuffixes[suffix]]} son`;
}
const KeeperOfTheMoonMale = ()=>{
    const { t , i18n  } = (0,external_next_i18next_.useTranslation)("name-generator");
    const { 0: forename , 1: setForename  } = (0,external_react_.useState)("");
    const { 0: suffix1 , 1: setSuffix  } = (0,external_react_.useState)("");
    const { 0: surname , 1: setSurname  } = (0,external_react_.useState)("");
    const name1 = formatName([
        forename,
        suffix1
    ].filter((x)=>x
    ).join("'"), surname);
    const locale = i18n.language;
    return /*#__PURE__*/ jsx_runtime_.jsx(Section/* default */.Z, {
        title: `${translate("clan", Clan.KeeperOfTheMoon, locale)} (${translate("gender", Gender.Male, locale)})`,
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)((Grid_default()), {
            container: true,
            spacing: 2,
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx((Grid_default()), {
                    item: true,
                    xs: 12,
                    md: 6,
                    children: /*#__PURE__*/ jsx_runtime_.jsx(name_generator_NameAutocomplete, {
                        options: charaMakeNames.miqote_keeperOfTheMoon_male.map((name)=>upperFirst(name.replace(/'.*$/, ""))
                        ),
                        value: forename,
                        onChange: setForename,
                        label: t("forename"),
                        placeholder: t("enterForename")
                    })
                }),
                /*#__PURE__*/ jsx_runtime_.jsx((Grid_default()), {
                    item: true,
                    xs: 12,
                    md: 6,
                    children: /*#__PURE__*/ jsx_runtime_.jsx((Typography_default()), {
                        paragraph: true,
                        children: "As part of a highly matriarchal society, the male\u2019s forename is taken from his mother."
                    })
                }),
                /*#__PURE__*/ jsx_runtime_.jsx((Grid_default()), {
                    item: true,
                    xs: 12,
                    md: 6,
                    children: /*#__PURE__*/ jsx_runtime_.jsx(name_generator_NameAutocomplete, {
                        options: Object.keys(miqoteSuffixes),
                        sort: (a, b)=>miqoteSuffixes[a] - miqoteSuffixes[b]
                        ,
                        getOptionLabel: (suffix)=>`${upperFirst(suffix)} - ${translateSuffix(suffix)}`
                        ,
                        value: suffix1,
                        onChange: setSuffix,
                        label: t("suffix"),
                        placeholder: t("enterSuffix")
                    })
                }),
                /*#__PURE__*/ jsx_runtime_.jsx((Grid_default()), {
                    item: true,
                    xs: 12,
                    md: 6,
                    children: /*#__PURE__*/ jsx_runtime_.jsx((Typography_default()), {
                        paragraph: true,
                        children: "The forename is always proceeded by a suffix indicating their birth order, although it is rare for families to have more than two or three sons."
                    })
                }),
                /*#__PURE__*/ jsx_runtime_.jsx((Grid_default()), {
                    item: true,
                    xs: 12,
                    md: 6,
                    children: /*#__PURE__*/ jsx_runtime_.jsx(name_generator_NameAutocomplete, {
                        options: charaMakeNames.miqote_keeperOfTheMoon_lastName,
                        value: surname,
                        onChange: setSurname,
                        label: t("surname"),
                        placeholder: t("enterSurname")
                    })
                }),
                /*#__PURE__*/ jsx_runtime_.jsx((Grid_default()), {
                    item: true,
                    xs: 12,
                    md: 6,
                    children: /*#__PURE__*/ jsx_runtime_.jsx((Typography_default()), {
                        paragraph: true,
                        children: "The surname is also taken from the mother."
                    })
                }),
                name1.length > 0 && /*#__PURE__*/ jsx_runtime_.jsx((Grid_default()), {
                    item: true,
                    xs: 12,
                    children: /*#__PURE__*/ jsx_runtime_.jsx(name_generator_MyNameIs, {
                        name: name1
                    })
                })
            ]
        })
    });
};
/* harmony default export */ const name_generator_KeeperOfTheMoonMale = (KeeperOfTheMoonMale);

;// CONCATENATED MODULE: ./src/name-generator/KeeperOfTheMoonFemale.tsx











const KeeperOfTheMoonFemale = ()=>{
    const { t , i18n  } = (0,external_next_i18next_.useTranslation)("name-generator");
    const { 0: forename , 1: setForename  } = (0,external_react_.useState)("");
    const { 0: surname , 1: setSurname  } = (0,external_react_.useState)("");
    const name = formatName(forename, surname);
    const locale = i18n.language;
    return /*#__PURE__*/ jsx_runtime_.jsx(Section/* default */.Z, {
        title: `${translate("clan", Clan.KeeperOfTheMoon, locale)} (${translate("gender", Gender.Female, locale)})`,
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)((Grid_default()), {
            container: true,
            spacing: 2,
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx((Grid_default()), {
                    item: true,
                    xs: 12,
                    md: 6,
                    children: /*#__PURE__*/ jsx_runtime_.jsx(name_generator_NameAutocomplete, {
                        options: charaMakeNames.miqote_keeperOfTheMoon_female,
                        value: forename,
                        onChange: setForename,
                        label: t("forename"),
                        placeholder: t("enterForename")
                    })
                }),
                /*#__PURE__*/ jsx_runtime_.jsx((Grid_default()), {
                    item: true,
                    xs: 12,
                    md: 6,
                    children: /*#__PURE__*/ jsx_runtime_.jsx((Typography_default()), {
                        paragraph: true,
                        children: "Female names are short, resembling those of male Seekers of the Sun."
                    })
                }),
                /*#__PURE__*/ jsx_runtime_.jsx((Grid_default()), {
                    item: true,
                    xs: 12,
                    md: 6,
                    children: /*#__PURE__*/ jsx_runtime_.jsx(name_generator_NameAutocomplete, {
                        options: charaMakeNames.miqote_keeperOfTheMoon_lastName,
                        value: surname,
                        onChange: setSurname,
                        label: t("surname"),
                        placeholder: t("enterSurname")
                    })
                }),
                /*#__PURE__*/ jsx_runtime_.jsx((Grid_default()), {
                    item: true,
                    xs: 12,
                    md: 6,
                    children: /*#__PURE__*/ jsx_runtime_.jsx((Typography_default()), {
                        paragraph: true,
                        children: "As part of a highly matriarchal society, the surname is passed down from the mother, not the father."
                    })
                }),
                name.length > 0 && /*#__PURE__*/ jsx_runtime_.jsx((Grid_default()), {
                    item: true,
                    xs: 12,
                    children: /*#__PURE__*/ jsx_runtime_.jsx(name_generator_MyNameIs, {
                        name: name
                    })
                })
            ]
        })
    });
};
/* harmony default export */ const name_generator_KeeperOfTheMoonFemale = (KeeperOfTheMoonFemale);

// EXTERNAL MODULE: external "@mui/material/Box"
var Box_ = __webpack_require__(19);
var Box_default = /*#__PURE__*/__webpack_require__.n(Box_);
;// CONCATENATED MODULE: ./src/name-generator/SeaWolfMale.tsx












const WORDS = Object.keys(roegadynDictionary);
const SeaWolfMale = ()=>{
    const { i18n  } = (0,external_next_i18next_.useTranslation)("name-generator");
    const { 0: forenameWord1 , 1: setForenameWord1  } = (0,external_react_.useState)("");
    const { 0: forenameWord2 , 1: setForenameWord2  } = (0,external_react_.useState)("");
    const { 0: surnameWord1 , 1: setSurnameWord1  } = (0,external_react_.useState)("");
    const { 0: surnameWord2 , 1: setSurnameWord2  } = (0,external_react_.useState)("");
    const forename = combineRoegadyn(conjugateRoegadyn(forenameWord1, "A"), conjugateRoegadyn(forenameWord2, "N"));
    const surname = surnameWord1 !== "" || surnameWord2 !== "" ? combineRoegadyn(conjugateRoegadyn(surnameWord1, "A"), conjugateRoegadyn(surnameWord2, "N"), "Syn") : "";
    const name = formatName(forename, surname);
    const locale = i18n.language;
    return /*#__PURE__*/ jsx_runtime_.jsx(Section/* default */.Z, {
        title: `${translate("clan", Clan.SeaWolf, locale)} (${translate("gender", Gender.Male, locale)})`,
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)((Grid_default()), {
            container: true,
            spacing: 2,
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx((Grid_default()), {
                    item: true,
                    xs: 12,
                    md: 6,
                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)((Grid_default()), {
                        container: true,
                        spacing: 2,
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx((Grid_default()), {
                                item: true,
                                xs: 12,
                                children: /*#__PURE__*/ jsx_runtime_.jsx(name_generator_NameAutocomplete, {
                                    options: WORDS,
                                    getOptionLabel: (word)=>{
                                        const entry = roegadynDictionary[word];
                                        return entry !== undefined ? `${word} (${entry.grammar}, ${entry.definition_en})` : word;
                                    },
                                    value: forenameWord1,
                                    onChange: setForenameWord1,
                                    label: "Forename - First word",
                                    placeholder: "Enter a Roegadyn word"
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx((Grid_default()), {
                                item: true,
                                xs: 12,
                                children: /*#__PURE__*/ jsx_runtime_.jsx(name_generator_NameAutocomplete, {
                                    options: WORDS,
                                    getOptionLabel: (word)=>{
                                        const entry = roegadynDictionary[word];
                                        return entry !== undefined ? `${word} (${entry.grammar}, ${entry.definition_en})` : word;
                                    },
                                    value: forenameWord2,
                                    onChange: setForenameWord2,
                                    label: "Forename - Second word",
                                    placeholder: "Enter a Roegadyn word"
                                })
                            })
                        ]
                    })
                }),
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)((Grid_default()), {
                    item: true,
                    xs: 12,
                    md: 6,
                    children: [
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)((Typography_default()), {
                            paragraph: true,
                            children: [
                                "Sea Wolf forenames are formed from two words of the ancient Roegadyn language, typically a descriptor and a noun.",
                                /*#__PURE__*/ jsx_runtime_.jsx("br", {}),
                                "E.g. \u201CMerlwyb\u201D = \u201CMerl\u201D (Sea) + \u201CWyb\u201D (Woman)"
                            ]
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx((Typography_default()), {
                            children: "Words are conjugated according to the following rules (with exceptions):"
                        }),
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)((Box_default()), {
                            component: "dl",
                            sx: {
                                borderLeftWidth: "2px",
                                borderLeftStyle: "solid",
                                borderLeftColor: "text.secondary",
                                paddingLeft: 2,
                                "& > dd:not(:last-child)": {
                                    mb: 1
                                }
                            },
                            children: [
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)((Typography_default()), {
                                    component: "dt",
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx("b", {
                                            children: "N \u2192 A"
                                        }),
                                        ". To conjugate a noun to an adjective, add \u201C\u2011i\u201D."
                                    ]
                                }),
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)((Typography_default()), {
                                    component: "dd",
                                    children: [
                                        "\u201CAis\u201D (Ice) + \u201Ci\u201D = \u201CAis",
                                        /*#__PURE__*/ jsx_runtime_.jsx("b", {
                                            children: "i"
                                        }),
                                        "\u201D (Icy)"
                                    ]
                                }),
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)((Typography_default()), {
                                    component: "dt",
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx("b", {
                                            children: "V \u2192 N"
                                        }),
                                        ". To conjugate a verb to a noun, add \u201C\u2011a\u201D."
                                    ]
                                }),
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)((Typography_default()), {
                                    component: "dd",
                                    children: [
                                        "\u201CBraen\u201D (Break) + \u201Ca\u201D = \u201CBraen",
                                        /*#__PURE__*/ jsx_runtime_.jsx("b", {
                                            children: "a"
                                        }),
                                        "\u201D (Breaker)"
                                    ]
                                }),
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)((Typography_default()), {
                                    component: "dt",
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx("b", {
                                            children: "V \u2192 A"
                                        }),
                                        ". To conjugate a verb to an adjective, add \u201C\u2011n\u201D."
                                    ]
                                }),
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)((Typography_default()), {
                                    component: "dd",
                                    children: [
                                        "\u201CFloer\u201D (Lead) + \u201Cn\u201D = \u201CFloer",
                                        /*#__PURE__*/ jsx_runtime_.jsx("b", {
                                            children: "n"
                                        }),
                                        "\u201D (Leading)"
                                    ]
                                })
                            ]
                        }),
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)((Typography_default()), {
                            paragraph: true,
                            children: [
                                "When combining words, double letters are collapsed.",
                                /*#__PURE__*/ jsx_runtime_.jsx("br", {}),
                                "E.g. \u201CRost",
                                /*#__PURE__*/ jsx_runtime_.jsx("b", {
                                    children: "n"
                                }),
                                "\u201D (Rusty) + \u201C",
                                /*#__PURE__*/ jsx_runtime_.jsx("b", {
                                    children: "N"
                                }),
                                "oez\u201D (Walnut) = \u201CRost",
                                /*#__PURE__*/ jsx_runtime_.jsx("b", {
                                    children: "n"
                                }),
                                "oez\u201D (Rusty Walnut)"
                            ]
                        })
                    ]
                }),
                /*#__PURE__*/ jsx_runtime_.jsx((Grid_default()), {
                    item: true,
                    xs: 12,
                    md: 6,
                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)((Grid_default()), {
                        container: true,
                        spacing: 2,
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx((Grid_default()), {
                                item: true,
                                xs: 12,
                                children: /*#__PURE__*/ jsx_runtime_.jsx(name_generator_NameAutocomplete, {
                                    options: WORDS,
                                    getOptionLabel: (word)=>{
                                        const entry = roegadynDictionary[word];
                                        return entry !== undefined ? `${word} (${entry.grammar}, ${entry.definition_en})` : word;
                                    },
                                    value: surnameWord1,
                                    onChange: setSurnameWord1,
                                    label: "Surname - First word",
                                    placeholder: "Enter a Roegadyn word"
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx((Grid_default()), {
                                item: true,
                                xs: 12,
                                children: /*#__PURE__*/ jsx_runtime_.jsx(name_generator_NameAutocomplete, {
                                    options: WORDS,
                                    getOptionLabel: (word)=>{
                                        const entry = roegadynDictionary[word];
                                        return entry !== undefined ? `${word} (${entry.grammar}, ${entry.definition_en})` : word;
                                    },
                                    value: surnameWord2,
                                    onChange: setSurnameWord2,
                                    label: "Surname - Second word",
                                    placeholder: "Enter a Roegadyn word"
                                })
                            })
                        ]
                    })
                }),
                /*#__PURE__*/ jsx_runtime_.jsx((Grid_default()), {
                    item: true,
                    xs: 12,
                    md: 6,
                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)((Typography_default()), {
                        paragraph: true,
                        children: [
                            "The surname is made from the father\u2019s name with \u201CSyn\u201D (Son) added to the end.",
                            /*#__PURE__*/ jsx_runtime_.jsx("br", {}),
                            "E.g. \u201CLyngmhol",
                            /*#__PURE__*/ jsx_runtime_.jsx("b", {
                                children: "syn"
                            }),
                            "\u201D = \u201CLyng\u201D (Long) + \u201CMhol\u201D (Eft) + \u201CSyn\u201D (Son)"
                        ]
                    })
                }),
                name.length > 0 && /*#__PURE__*/ jsx_runtime_.jsx((Grid_default()), {
                    item: true,
                    xs: 12,
                    children: /*#__PURE__*/ jsx_runtime_.jsx(name_generator_MyNameIs, {
                        name: name
                    })
                })
            ]
        })
    });
};
/* harmony default export */ const name_generator_SeaWolfMale = (SeaWolfMale);

;// CONCATENATED MODULE: ./src/name-generator/SeaWolfFemale.tsx












const SeaWolfFemale_WORDS = Object.keys(roegadynDictionary);
const SeaWolfFemale = ()=>{
    const { i18n  } = (0,external_next_i18next_.useTranslation)("name-generator");
    const { 0: forenameWord1 , 1: setForenameWord1  } = (0,external_react_.useState)("");
    const { 0: forenameWord2 , 1: setForenameWord2  } = (0,external_react_.useState)("");
    const { 0: surnameWord1 , 1: setSurnameWord1  } = (0,external_react_.useState)("");
    const { 0: surnameWord2 , 1: setSurnameWord2  } = (0,external_react_.useState)("");
    const forename = combineRoegadyn(conjugateRoegadyn(forenameWord1, "A"), conjugateRoegadyn(forenameWord2, "N"));
    const surname = surnameWord1 !== "" || surnameWord2 !== "" ? combineRoegadyn(conjugateRoegadyn(surnameWord1, "A"), conjugateRoegadyn(surnameWord2, "N"), "Wyn") : "";
    const name = formatName(forename, surname);
    const locale = i18n.language;
    return /*#__PURE__*/ jsx_runtime_.jsx(Section/* default */.Z, {
        title: `${translate("clan", Clan.SeaWolf, locale)} (${translate("gender", Gender.Female, locale)})`,
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)((Grid_default()), {
            container: true,
            spacing: 2,
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx((Grid_default()), {
                    item: true,
                    xs: 12,
                    md: 6,
                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)((Grid_default()), {
                        container: true,
                        spacing: 2,
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx((Grid_default()), {
                                item: true,
                                xs: 12,
                                children: /*#__PURE__*/ jsx_runtime_.jsx(name_generator_NameAutocomplete, {
                                    options: SeaWolfFemale_WORDS,
                                    getOptionLabel: (word)=>{
                                        const entry = roegadynDictionary[word];
                                        return entry !== undefined ? `${word} (${entry.grammar}, ${entry.definition_en})` : word;
                                    },
                                    value: forenameWord1,
                                    onChange: setForenameWord1,
                                    label: "Forename - First word",
                                    placeholder: "Enter a Roegadyn word"
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx((Grid_default()), {
                                item: true,
                                xs: 12,
                                children: /*#__PURE__*/ jsx_runtime_.jsx(name_generator_NameAutocomplete, {
                                    options: SeaWolfFemale_WORDS,
                                    getOptionLabel: (word)=>{
                                        const entry = roegadynDictionary[word];
                                        return entry !== undefined ? `${word} (${entry.grammar}, ${entry.definition_en})` : word;
                                    },
                                    value: forenameWord2,
                                    onChange: setForenameWord2,
                                    label: "Forename - Second word",
                                    placeholder: "Enter a Roegadyn word"
                                })
                            })
                        ]
                    })
                }),
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)((Grid_default()), {
                    item: true,
                    xs: 12,
                    md: 6,
                    children: [
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)((Typography_default()), {
                            paragraph: true,
                            children: [
                                "Sea Wolf forenames are formed from two words of the ancient Roegadyn language, typically a descriptor and a noun.",
                                /*#__PURE__*/ jsx_runtime_.jsx("br", {}),
                                "E.g. \u201CMerlwyb\u201D = \u201CMerl\u201D (Sea) + \u201CWyb\u201D (Woman)"
                            ]
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx((Typography_default()), {
                            paragraph: true,
                            children: "For female forenames, the second word is almost always one of the following:"
                        }),
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("ul", {
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx((Typography_default()), {
                                    component: "li",
                                    children: "\u201CSwys\u201D (Sister)"
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx((Typography_default()), {
                                    component: "li",
                                    children: "\u201CThota\u201D (Daughter)"
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx((Typography_default()), {
                                    component: "li",
                                    children: "\u201CWyda\u201D (Willow)"
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx((Typography_default()), {
                                    component: "li",
                                    children: "\u201CGeim\u201D (Jewel)"
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx((Typography_default()), {
                                    component: "li",
                                    children: "\u201CWyb\u201D (Woman)"
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx((Typography_default()), {
                                    component: "li",
                                    children: "\u201CRael\u201D (Doe)"
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx((Typography_default()), {
                                    component: "li",
                                    children: "\u201CLona\u201D (Gatherer)"
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx((Typography_default()), {
                                    component: "li",
                                    children: "\u201CBhyda\u201D (Bride)"
                                })
                            ]
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx((Typography_default()), {
                            children: "Words are conjugated according to the following rules (with exceptions):"
                        }),
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)((Box_default()), {
                            component: "dl",
                            sx: {
                                borderLeftWidth: "2px",
                                borderLeftStyle: "solid",
                                borderLeftColor: "text.secondary",
                                paddingLeft: 2,
                                "& > dd:not(:last-child)": {
                                    mb: 1
                                }
                            },
                            children: [
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)((Typography_default()), {
                                    component: "dt",
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx("b", {
                                            children: "N \u2192 A"
                                        }),
                                        ". To conjugate a noun to an adjective, add \u201C\u2011i\u201D."
                                    ]
                                }),
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)((Typography_default()), {
                                    component: "dd",
                                    children: [
                                        "\u201CAis\u201D (Ice) + \u201Ci\u201D = \u201CAis",
                                        /*#__PURE__*/ jsx_runtime_.jsx("b", {
                                            children: "i"
                                        }),
                                        "\u201D (Icy)"
                                    ]
                                }),
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)((Typography_default()), {
                                    component: "dt",
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx("b", {
                                            children: "V \u2192 N"
                                        }),
                                        ". To conjugate a verb to a noun, add \u201C\u2011a\u201D."
                                    ]
                                }),
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)((Typography_default()), {
                                    component: "dd",
                                    children: [
                                        "\u201CBraen\u201D (Break) + \u201Ca\u201D = \u201CBraen",
                                        /*#__PURE__*/ jsx_runtime_.jsx("b", {
                                            children: "a"
                                        }),
                                        "\u201D (Breaker)"
                                    ]
                                }),
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)((Typography_default()), {
                                    component: "dt",
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx("b", {
                                            children: "V \u2192 A"
                                        }),
                                        ". To conjugate a verb to an adjective, add \u201C\u2011n\u201D."
                                    ]
                                }),
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)((Typography_default()), {
                                    component: "dd",
                                    children: [
                                        "\u201CFloer\u201D (Lead) + \u201Cn\u201D = \u201CFloer",
                                        /*#__PURE__*/ jsx_runtime_.jsx("b", {
                                            children: "n"
                                        }),
                                        "\u201D (Leading)"
                                    ]
                                })
                            ]
                        }),
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)((Typography_default()), {
                            paragraph: true,
                            children: [
                                "When combining words, double letters are collapsed.",
                                /*#__PURE__*/ jsx_runtime_.jsx("br", {}),
                                "E.g. \u201CRost",
                                /*#__PURE__*/ jsx_runtime_.jsx("b", {
                                    children: "n"
                                }),
                                "\u201D (Rusty) + \u201C",
                                /*#__PURE__*/ jsx_runtime_.jsx("b", {
                                    children: "N"
                                }),
                                "oez\u201D (Walnut) = \u201CRost",
                                /*#__PURE__*/ jsx_runtime_.jsx("b", {
                                    children: "n"
                                }),
                                "oez\u201D (Rusty Walnut)"
                            ]
                        })
                    ]
                }),
                /*#__PURE__*/ jsx_runtime_.jsx((Grid_default()), {
                    item: true,
                    xs: 12,
                    md: 6,
                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)((Grid_default()), {
                        container: true,
                        spacing: 2,
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx((Grid_default()), {
                                item: true,
                                xs: 12,
                                children: /*#__PURE__*/ jsx_runtime_.jsx(name_generator_NameAutocomplete, {
                                    options: SeaWolfFemale_WORDS,
                                    getOptionLabel: (word)=>{
                                        const entry = roegadynDictionary[word];
                                        return entry !== undefined ? `${word} (${entry.grammar}, ${entry.definition_en})` : word;
                                    },
                                    value: surnameWord1,
                                    onChange: setSurnameWord1,
                                    label: "Surname - First word",
                                    placeholder: "Enter a Roegadyn word"
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx((Grid_default()), {
                                item: true,
                                xs: 12,
                                children: /*#__PURE__*/ jsx_runtime_.jsx(name_generator_NameAutocomplete, {
                                    options: SeaWolfFemale_WORDS,
                                    getOptionLabel: (word)=>{
                                        const entry = roegadynDictionary[word];
                                        return entry !== undefined ? `${word} (${entry.grammar}, ${entry.definition_en})` : word;
                                    },
                                    value: surnameWord2,
                                    onChange: setSurnameWord2,
                                    label: "Surname - Second word",
                                    placeholder: "Enter a Roegadyn word"
                                })
                            })
                        ]
                    })
                }),
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)((Grid_default()), {
                    item: true,
                    xs: 12,
                    md: 6,
                    children: [
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)((Typography_default()), {
                            paragraph: true,
                            children: [
                                "The surname is made from the father\u2019s name with \u201CWyn\u201D (Daughter) added to the end.",
                                /*#__PURE__*/ jsx_runtime_.jsx("br", {}),
                                "E.g. \u201CHezzfyr",
                                /*#__PURE__*/ jsx_runtime_.jsx("b", {
                                    children: "wyn"
                                }),
                                "\u201D = \u201CHezz\u201D (Hot) + \u201CFyr\u201D (Fire) + \u201CWyn\u201D (Daughter)"
                            ]
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx((Typography_default()), {
                            paragraph: true,
                            children: "Although both \u201CThota\u201D and \u201CWyn\u201D mean \u201CDaughter\u201D, \u201CThota\u201D is used exclusively for forenames, and \u201CWyn\u201D is exclusively for surnames."
                        })
                    ]
                }),
                name.length > 0 && /*#__PURE__*/ jsx_runtime_.jsx((Grid_default()), {
                    item: true,
                    xs: 12,
                    children: /*#__PURE__*/ jsx_runtime_.jsx(name_generator_MyNameIs, {
                        name: name
                    })
                })
            ]
        })
    });
};
/* harmony default export */ const name_generator_SeaWolfFemale = (SeaWolfFemale);

;// CONCATENATED MODULE: ./src/name-generator/HellsguardMale.tsx











const HellsguardMale = ()=>{
    const { t , i18n  } = (0,external_next_i18next_.useTranslation)("name-generator");
    const { 0: forename , 1: setForename  } = (0,external_react_.useState)("");
    const { 0: surname , 1: setSurname  } = (0,external_react_.useState)("");
    const name = formatName(forename, surname);
    const locale = i18n.language;
    return /*#__PURE__*/ jsx_runtime_.jsx(Section/* default */.Z, {
        title: `${translate("clan", Clan.Hellsguard, locale)} (${translate("gender", Gender.Male, locale)})`,
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)((Grid_default()), {
            container: true,
            spacing: 2,
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx((Grid_default()), {
                    item: true,
                    xs: 12,
                    md: 6,
                    children: /*#__PURE__*/ jsx_runtime_.jsx(name_generator_NameAutocomplete, {
                        options: charaMakeNames.roegadyn_hellsguard_firstName,
                        value: forename,
                        onChange: setForename,
                        label: t("forename"),
                        placeholder: t("enterForename")
                    })
                }),
                /*#__PURE__*/ jsx_runtime_.jsx((Grid_default()), {
                    item: true,
                    xs: 12,
                    md: 6,
                    children: /*#__PURE__*/ jsx_runtime_.jsx((Typography_default()), {
                        paragraph: true,
                        children: "Hellsguard names are formed from two words translated to modern Eorzean, typically a descriptor and a noun. They tend to draw heavily from nature, whether it\u2019s a vegetable, an animal, animate, inanimate, abstract, or concrete."
                    })
                }),
                /*#__PURE__*/ jsx_runtime_.jsx((Grid_default()), {
                    item: true,
                    xs: 12,
                    md: 6,
                    children: /*#__PURE__*/ jsx_runtime_.jsx(name_generator_NameAutocomplete, {
                        options: charaMakeNames.roegadyn_hellsguard_male_lastName,
                        value: surname,
                        onChange: setSurname,
                        label: t("surname"),
                        placeholder: t("enterSurname")
                    })
                }),
                /*#__PURE__*/ jsx_runtime_.jsx((Grid_default()), {
                    item: true,
                    xs: 12,
                    md: 6,
                    children: /*#__PURE__*/ jsx_runtime_.jsx((Typography_default()), {
                        paragraph: true,
                        children: "Highly independent in nature, Hellsguard who leave their mountain homes for the city-states of Eorzea will often drop their family names."
                    })
                }),
                name.length > 0 && /*#__PURE__*/ jsx_runtime_.jsx((Grid_default()), {
                    item: true,
                    xs: 12,
                    children: /*#__PURE__*/ jsx_runtime_.jsx(name_generator_MyNameIs, {
                        name: name
                    })
                })
            ]
        })
    });
};
/* harmony default export */ const name_generator_HellsguardMale = (HellsguardMale);

;// CONCATENATED MODULE: ./src/name-generator/HellsguardFemale.tsx











const HellsguardFemale = ()=>{
    const { t , i18n  } = (0,external_next_i18next_.useTranslation)("name-generator");
    const { 0: forename , 1: setForename  } = (0,external_react_.useState)("");
    const { 0: surname , 1: setSurname  } = (0,external_react_.useState)("");
    const name = formatName(forename, surname);
    const locale = i18n.language;
    return /*#__PURE__*/ jsx_runtime_.jsx(Section/* default */.Z, {
        title: `${translate("clan", Clan.Hellsguard, locale)} (${translate("gender", Gender.Female, locale)})`,
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)((Grid_default()), {
            container: true,
            spacing: 2,
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx((Grid_default()), {
                    item: true,
                    xs: 12,
                    md: 6,
                    children: /*#__PURE__*/ jsx_runtime_.jsx(name_generator_NameAutocomplete, {
                        options: charaMakeNames.roegadyn_hellsguard_firstName,
                        value: forename,
                        onChange: setForename,
                        label: t("forename"),
                        placeholder: t("enterForename")
                    })
                }),
                /*#__PURE__*/ jsx_runtime_.jsx((Grid_default()), {
                    item: true,
                    xs: 12,
                    md: 6,
                    children: /*#__PURE__*/ jsx_runtime_.jsx((Typography_default()), {
                        paragraph: true,
                        children: "Hellsguard names are formed from two words translated to modern Eorzean, typically a descriptor and a noun. They tend to draw heavily from nature, whether it\u2019s a vegetable, an animal, animate, inanimate, abstract, or concrete. For female names, the second word tends to plant imagery (e.g. \u201CLily\u201D, \u201COrchid\u201D), though there are many that do not, and it is not exclusive to female names."
                    })
                }),
                /*#__PURE__*/ jsx_runtime_.jsx((Grid_default()), {
                    item: true,
                    xs: 12,
                    md: 6,
                    children: /*#__PURE__*/ jsx_runtime_.jsx(name_generator_NameAutocomplete, {
                        options: charaMakeNames.roegadyn_hellsguard_female_lastName,
                        value: surname,
                        onChange: setSurname,
                        label: t("surname"),
                        placeholder: t("enterSurname")
                    })
                }),
                /*#__PURE__*/ jsx_runtime_.jsx((Grid_default()), {
                    item: true,
                    xs: 12,
                    md: 6,
                    children: /*#__PURE__*/ jsx_runtime_.jsx((Typography_default()), {
                        paragraph: true,
                        children: "Highly independent in nature, Hellsguard who leave their mountain homes for the city-states of Eorzea will often drop their family names."
                    })
                }),
                name.length > 0 && /*#__PURE__*/ jsx_runtime_.jsx((Grid_default()), {
                    item: true,
                    xs: 12,
                    children: /*#__PURE__*/ jsx_runtime_.jsx(name_generator_MyNameIs, {
                        name: name
                    })
                })
            ]
        })
    });
};
/* harmony default export */ const name_generator_HellsguardFemale = (HellsguardFemale);

;// CONCATENATED MODULE: ./src/name-generator/Generator.tsx
































const ADVANCED = {
    [`${Clan.Midlander},${Gender.Male}`]: name_generator_MidlanderMale,
    [`${Clan.Midlander},${Gender.Female}`]: name_generator_MidlanderFemale,
    [`${Clan.Highlander},${Gender.Male}`]: name_generator_HighlanderMale,
    [`${Clan.Highlander},${Gender.Female}`]: name_generator_HighlanderFemale,
    [`${Clan.Wildwood},${Gender.Male}`]: name_generator_WildwoodMale,
    [`${Clan.Wildwood},${Gender.Female}`]: name_generator_WildwoodFemale,
    [`${Clan.Duskwight},${Gender.Male}`]: name_generator_DuskwightMale,
    [`${Clan.Duskwight},${Gender.Female}`]: name_generator_DuskwightFemale,
    [`${Clan.Plainsfolk},${Gender.Male}`]: name_generator_PlainsfolkMale,
    [`${Clan.Plainsfolk},${Gender.Female}`]: name_generator_PlainsfolkFemale,
    [`${Clan.Dunesfolk},${Gender.Male}`]: name_generator_DunesfolkMale,
    [`${Clan.Dunesfolk},${Gender.Female}`]: name_generator_DunesfolkFemale,
    [`${Clan.SeekerOfTheSun},${Gender.Male}`]: SeekerOfTheSunMale,
    [`${Clan.SeekerOfTheSun},${Gender.Female}`]: SeekerOfTheSunFemale,
    [`${Clan.KeeperOfTheMoon},${Gender.Male}`]: name_generator_KeeperOfTheMoonMale,
    [`${Clan.KeeperOfTheMoon},${Gender.Female}`]: name_generator_KeeperOfTheMoonFemale,
    [`${Clan.SeaWolf},${Gender.Male}`]: name_generator_SeaWolfMale,
    [`${Clan.SeaWolf},${Gender.Female}`]: name_generator_SeaWolfFemale,
    [`${Clan.Hellsguard},${Gender.Male}`]: name_generator_HellsguardMale,
    [`${Clan.Hellsguard},${Gender.Female}`]: name_generator_HellsguardFemale
};
function Generator_randomElement(array) {
    return array[Math.floor(Math.random() * array.length)];
}
const Generator = ()=>{
    const { t , i18n  } = (0,external_next_i18next_.useTranslation)("name-generator");
    const { 0: race1 , 1: setRace  } = (0,external_react_.useState)(null);
    const { 0: clan1 , 1: setClan  } = (0,external_react_.useState)(null);
    const { 0: gender1 , 1: setGender  } = (0,external_react_.useState)(null);
    const { 0: results , 1: setResults  } = (0,external_react_.useState)(null);
    const locale = i18n.language;
    const raceClans1 = race1 !== null ? getClans(race1) : [];
    const raceGenders1 = race1 !== null ? getGenders(race1) : [];
    const AdvancedComponent = clan1 !== null && gender1 !== null ? ADVANCED[`${clan1},${gender1}`] : null;
    const handleSelectRace = (event)=>{
        const race = event.target.value === "none" ? null : event.target.value;
        const raceClans = race !== null ? getClans(race) : [];
        const raceGenders = race !== null ? getGenders(race) : [];
        setRace(race);
        setClan(race !== null && raceClans.length === 1 ? raceClans[0] : null);
        setGender(race !== null && raceGenders.length === 1 ? raceGenders[0] : null);
    };
    const handleSelectClan = (event)=>{
        const clan = event.target.value;
        setClan(clan === "none" ? null : clan);
    };
    const handleSelectGender = (event)=>{
        const gender = event.target.value;
        setGender(gender === "none" ? null : gender);
    };
    const handleClickGenerate = ()=>{
        const newResults = [];
        for(let i = 0; i < 10; ++i){
            const genRace = race1 !== null ? race1 : Generator_randomElement(getRaces());
            const genClan = clan1 !== null ? clan1 : Generator_randomElement(getClans(genRace));
            const genGender = gender1 !== null ? gender1 : Generator_randomElement(getGenders(genRace));
            newResults.push(generate(genClan, genGender));
        }
        setResults(newResults);
    };
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)(Section/* default */.Z, {
                children: [
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)((Grid_default()), {
                        container: true,
                        spacing: 2,
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx((Grid_default()), {
                                item: true,
                                xs: 12,
                                md: 4,
                                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)((FormControl_default()), {
                                    variant: "standard",
                                    fullWidth: true,
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx((InputLabel_default()), {
                                            children: t("race")
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)((Select_default()), {
                                            value: race1 !== null ? race1 : "none",
                                            onChange: handleSelectRace,
                                            children: [
                                                /*#__PURE__*/ jsx_runtime_.jsx((MenuItem_default()), {
                                                    value: "none",
                                                    children: t("anyRace")
                                                }),
                                                getRaces().map((race)=>/*#__PURE__*/ jsx_runtime_.jsx((MenuItem_default()), {
                                                        value: race,
                                                        children: translate("race", race, locale)
                                                    }, race)
                                                )
                                            ]
                                        })
                                    ]
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx((Grid_default()), {
                                item: true,
                                xs: 12,
                                md: 4,
                                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)((FormControl_default()), {
                                    variant: "standard",
                                    fullWidth: true,
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx((InputLabel_default()), {
                                            children: t("clan")
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)((Select_default()), {
                                            value: clan1 !== null ? clan1 : "none",
                                            onChange: handleSelectClan,
                                            children: [
                                                raceClans1.length !== 1 && /*#__PURE__*/ jsx_runtime_.jsx((MenuItem_default()), {
                                                    value: "none",
                                                    children: t("anyClan")
                                                }),
                                                raceClans1.map((clan)=>/*#__PURE__*/ jsx_runtime_.jsx((MenuItem_default()), {
                                                        value: clan,
                                                        children: translate("clan", clan, locale)
                                                    }, clan)
                                                )
                                            ]
                                        })
                                    ]
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx((Grid_default()), {
                                item: true,
                                xs: 12,
                                md: 4,
                                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)((FormControl_default()), {
                                    variant: "standard",
                                    fullWidth: true,
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx((InputLabel_default()), {
                                            children: t("gender")
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)((Select_default()), {
                                            value: gender1 !== null ? gender1 : "none",
                                            onChange: handleSelectGender,
                                            children: [
                                                raceGenders1.length !== 1 && /*#__PURE__*/ jsx_runtime_.jsx((MenuItem_default()), {
                                                    value: "none",
                                                    children: t("anyGender")
                                                }),
                                                raceGenders1.map((gender)=>/*#__PURE__*/ jsx_runtime_.jsx((MenuItem_default()), {
                                                        value: gender,
                                                        children: translate("gender", gender, locale)
                                                    }, gender)
                                                )
                                            ]
                                        })
                                    ]
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx((Grid_default()), {
                                item: true,
                                xs: 12,
                                children: /*#__PURE__*/ jsx_runtime_.jsx((Button_default()), {
                                    variant: "contained",
                                    color: "primary",
                                    fullWidth: true,
                                    onClick: handleClickGenerate,
                                    children: t("generate")
                                })
                            })
                        ]
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(name_generator_MyNameIs, {
                        name: results ?? "Click the Generate button!"
                    })
                ]
            }),
            AdvancedComponent != null && /*#__PURE__*/ jsx_runtime_.jsx(AdvancedComponent, {})
        ]
    });
};
/* harmony default export */ const name_generator_Generator = (Generator);

// EXTERNAL MODULE: external "@mui/material/TableContainer"
var TableContainer_ = __webpack_require__(443);
var TableContainer_default = /*#__PURE__*/__webpack_require__.n(TableContainer_);
// EXTERNAL MODULE: external "@mui/material/Table"
var Table_ = __webpack_require__(9181);
var Table_default = /*#__PURE__*/__webpack_require__.n(Table_);
// EXTERNAL MODULE: external "@mui/material/TableHead"
var TableHead_ = __webpack_require__(5953);
var TableHead_default = /*#__PURE__*/__webpack_require__.n(TableHead_);
// EXTERNAL MODULE: external "@mui/material/TableBody"
var TableBody_ = __webpack_require__(8823);
var TableBody_default = /*#__PURE__*/__webpack_require__.n(TableBody_);
// EXTERNAL MODULE: external "@mui/material/TableRow"
var TableRow_ = __webpack_require__(4848);
var TableRow_default = /*#__PURE__*/__webpack_require__.n(TableRow_);
// EXTERNAL MODULE: external "@mui/material/TableCell"
var TableCell_ = __webpack_require__(8099);
var TableCell_default = /*#__PURE__*/__webpack_require__.n(TableCell_);
;// CONCATENATED MODULE: ./src/name-generator/About.tsx
















const CONVENTION_LINKS = {
    [Race.Hyur]: "https://forum.square-enix.com/ffxiv/threads/63112-Race-Naming-Conventions?p=1014929&viewfull=1#post1014929",
    [Race.Elezen]: "https://forum.square-enix.com/ffxiv/threads/63112-Race-Naming-Conventions?p=1014928&viewfull=1#post1014928",
    [Race.Lalafell]: "https://forum.square-enix.com/ffxiv/threads/63112-Race-Naming-Conventions?p=1014931&viewfull=1#post1014931",
    [Race.Miqote]: "https://forum.square-enix.com/ffxiv/threads/63112-Race-Naming-Conventions?p=1014930&viewfull=1#post1014930",
    [Race.Roegadyn]: "https://forum.square-enix.com/ffxiv/threads/63112-Race-Naming-Conventions?p=1014932&viewfull=1#post1014932",
    [Race.AuRa]: "https://forum.square-enix.com/ffxiv/threads/63112-Race-Naming-Conventions?p=3039574&viewfull=1#post3039574",
    [Race.Hrothgar]: "https://forum.square-enix.com/ffxiv/threads/398566-Hrothgar-Naming-Conventions?p=5091422&viewfull=1#post5091422",
    [Race.Viera]: "https://forum.square-enix.com/ffxiv/threads/398565-Viera-Naming-Conventions?p=5091421&viewfull=1#post5091421"
};
function combinations(...arrays) {
    return arrays.map((array)=>array.filter((name, index)=>name !== array[index + 1]
        )
    ).reduce((acc, curr)=>acc * curr.length
    , 1);
}
const STATISTICS = {
    [Clan.Midlander]: {
        [Gender.Male]: combinations(charaMakeNames.hyur_midlander_male, charaMakeNames.hyur_midlander_lastName),
        [Gender.Female]: combinations(charaMakeNames.hyur_midlander_female, charaMakeNames.hyur_midlander_lastName)
    },
    [Clan.Highlander]: {
        [Gender.Male]: combinations(charaMakeNames.hyur_highlander_male, charaMakeNames.hyur_highlander_lastName),
        [Gender.Female]: combinations(charaMakeNames.hyur_highlander_female, charaMakeNames.hyur_highlander_lastName)
    },
    [Clan.Wildwood]: {
        [Gender.Male]: combinations(charaMakeNames.elezen_male, charaMakeNames.elezen_wildwood_lastName),
        [Gender.Female]: combinations(charaMakeNames.elezen_female, charaMakeNames.elezen_wildwood_lastName)
    },
    [Clan.Duskwight]: {
        [Gender.Male]: combinations(charaMakeNames.elezen_male, charaMakeNames.elezen_duskwight_lastName),
        [Gender.Female]: combinations(charaMakeNames.elezen_female, charaMakeNames.elezen_duskwight_lastName)
    },
    [Clan.Plainsfolk]: {
        [Gender.Male]: combinations(charaMakeNames.lalafell_plainsfolk_firstNameStart, charaMakeNames.lalafell_plainsfolk_endOfNames, charaMakeNames.lalafell_plainsfolk_lastNameStart),
        [Gender.Female]: combinations(charaMakeNames.lalafell_plainsfolk_firstNameStart, charaMakeNames.lalafell_plainsfolk_endOfNames)
    },
    [Clan.Dunesfolk]: {
        [Gender.Male]: combinations(charaMakeNames.lalafell_dunesfolk_male, charaMakeNames.lalafell_dunesfolk_male_lastName, charaMakeNames.lalafell_dunesfolk_male),
        [Gender.Female]: combinations(charaMakeNames.lalafell_dunesfolk_female, charaMakeNames.lalafell_dunesfolk_female_lastName)
    },
    [Clan.SeekerOfTheSun]: {
        [Gender.Male]: combinations(charaMakeNames.miqote_seekerOfTheSun_male, charaMakeNames.miqote_seekerOfTheSun_male_lastName),
        [Gender.Female]: combinations(charaMakeNames.miqote_seekerOfTheSun_female, charaMakeNames.miqote_seekerOfTheSun_female_lastName)
    },
    [Clan.KeeperOfTheMoon]: {
        [Gender.Male]: combinations(charaMakeNames.miqote_keeperOfTheMoon_male, charaMakeNames.miqote_keeperOfTheMoon_lastName),
        [Gender.Female]: combinations(charaMakeNames.miqote_keeperOfTheMoon_female, charaMakeNames.miqote_keeperOfTheMoon_lastName)
    },
    [Clan.SeaWolf]: {
        [Gender.Male]: combinations(charaMakeNames.roegadyn_seaWolf_male, charaMakeNames.roegadyn_seaWolf_male_lastName),
        [Gender.Female]: combinations(charaMakeNames.roegadyn_seaWolf_female, charaMakeNames.roegadyn_seaWolf_female_lastName)
    },
    [Clan.Hellsguard]: {
        [Gender.Male]: combinations(charaMakeNames.roegadyn_hellsguard_firstName, charaMakeNames.roegadyn_hellsguard_male_lastName),
        [Gender.Female]: combinations(charaMakeNames.roegadyn_hellsguard_firstName, charaMakeNames.roegadyn_hellsguard_female_lastName)
    },
    [Clan.Raen]: {
        [Gender.Male]: combinations(charaMakeNames.auRa_raen_male, charaMakeNames.auRa_raen_lastName),
        [Gender.Female]: combinations(charaMakeNames.auRa_raen_female, charaMakeNames.auRa_raen_lastName)
    },
    [Clan.Xaela]: {
        [Gender.Male]: combinations(charaMakeNames.auRa_xaela_male, charaMakeNames.auRa_xaela_lastName),
        [Gender.Female]: combinations(charaMakeNames.auRa_xaela_female, charaMakeNames.auRa_xaela_lastName)
    },
    [Clan.Helions]: {
        [Gender.Male]: combinations(charaMakeNames.hrothgar_helions_firstName, charaMakeNames.hrothgar_helions_lastName),
        [Gender.Female]: 0
    },
    [Clan.TheLost]: {
        [Gender.Male]: combinations(charaMakeNames.hrothgar_theLost_firstName, charaMakeNames.hrothgar_theLost_lastName),
        [Gender.Female]: 0
    },
    [Clan.Rava]: {
        [Gender.Male]: 0,
        [Gender.Female]: combinations(charaMakeNames.viera_firstName, charaMakeNames.viera_rava_lastName)
    },
    [Clan.Veena]: {
        [Gender.Male]: 0,
        [Gender.Female]: combinations(charaMakeNames.viera_firstName, charaMakeNames.viera_veena_lastName)
    }
};
const About = ()=>{
    const { t , i18n  } = (0,external_next_i18next_.useTranslation)("name-generator");
    const locale = i18n.language;
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(Section/* default */.Z, {
        title: t("about"),
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx((Typography_default()), {
                paragraph: true,
                children: "Naming conventions for the various races can be found here:"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx((Box_default()), {
                sx: {
                    flexFlow: "row wrap",
                    mb: 2,
                    textAlign: "center"
                },
                children: getRaces().map((race)=>/*#__PURE__*/ jsx_runtime_.jsx((Button_default()), {
                        variant: "contained",
                        href: CONVENTION_LINKS[race],
                        sx: {
                            m: 0.5
                        },
                        children: /*#__PURE__*/ jsx_runtime_.jsx((Typography_default()), {
                            children: translate("race", race, locale)
                        })
                    }, race)
                )
            }),
            /*#__PURE__*/ jsx_runtime_.jsx((TableContainer_default()), {
                sx: {
                    mb: 2
                },
                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)((Paper_default()), {
                    component: (Table_default()),
                    sx: {
                        width: "auto",
                        m: "auto"
                    },
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx((TableHead_default()), {
                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)((TableRow_default()), {
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx((TableCell_default()), {
                                        align: "center",
                                        children: t("race")
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx((TableCell_default()), {
                                        align: "center",
                                        children: t("clan")
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx((TableCell_default()), {
                                        align: "center",
                                        children: t("gender")
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx((TableCell_default()), {
                                        align: "center",
                                        children: t("combinations")
                                    })
                                ]
                            })
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx((TableBody_default()), {
                            children: getRaces().map((race)=>{
                                const rows = [];
                                const clans = getClans(race);
                                const genders = getGenders(race);
                                for(let i = 0; i < clans.length; ++i){
                                    for(let j = 0; j < genders.length; ++j){
                                        rows.push(/*#__PURE__*/ (0,jsx_runtime_.jsxs)((TableRow_default()), {
                                            children: [
                                                i === 0 && j === 0 && /*#__PURE__*/ jsx_runtime_.jsx((TableCell_default()), {
                                                    rowSpan: clans.length * genders.length,
                                                    align: "center",
                                                    children: /*#__PURE__*/ jsx_runtime_.jsx((Typography_default()), {
                                                        children: translate("race", race, locale)
                                                    })
                                                }),
                                                j === 0 && /*#__PURE__*/ jsx_runtime_.jsx((TableCell_default()), {
                                                    rowSpan: genders.length,
                                                    align: "center",
                                                    children: /*#__PURE__*/ jsx_runtime_.jsx((Typography_default()), {
                                                        children: translate("clan", clans[i], locale)
                                                    })
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx((TableCell_default()), {
                                                    align: "center",
                                                    children: /*#__PURE__*/ jsx_runtime_.jsx((Typography_default()), {
                                                        children: translate("gender", genders[j], locale)
                                                    })
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx((TableCell_default()), {
                                                    align: "right",
                                                    children: /*#__PURE__*/ jsx_runtime_.jsx((Typography_default()), {
                                                        children: STATISTICS[clans[i]][genders[j]].toLocaleString(locale)
                                                    })
                                                })
                                            ]
                                        }, `${race},${clans[i]},${genders[j]}`));
                                    }
                                }
                                return rows;
                            })
                        })
                    ]
                })
            })
        ]
    });
};
/* harmony default export */ const name_generator_About = (About);

;// CONCATENATED MODULE: ./pages/name-generator.tsx







const NameGenerator = ()=>{
    const { t  } = (0,external_next_i18next_.useTranslation)("name-generator");
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(Page/* default */.Z, {
        title: t("_title"),
        description: t("_description"),
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(name_generator_Generator, {}),
            /*#__PURE__*/ jsx_runtime_.jsx(name_generator_About, {})
        ]
    });
};
const getStaticProps = async ({ locale  })=>{
    return {
        props: {
            ...await (0,serverSideTranslations_.serverSideTranslations)(locale ?? "en", [
                "common",
                "name-generator"
            ])
        }
    };
};
/* harmony default export */ const name_generator = (NameGenerator);


/***/ }),

/***/ 8884:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5193);
/* harmony import */ var _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _mui_material_Box__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(19);
/* harmony import */ var _mui_material_Box__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_mui_material_Box__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _mui_material_Typography__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(7163);
/* harmony import */ var _mui_material_Typography__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_mui_material_Typography__WEBPACK_IMPORTED_MODULE_3__);




const Section = ({ title , sx , children  })=>{
    return /*#__PURE__*/ (0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((_mui_material_Box__WEBPACK_IMPORTED_MODULE_2___default()), {
        component: "section",
        mb: 4,
        sx: sx,
        children: [
            title !== undefined && /*#__PURE__*/ _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_Typography__WEBPACK_IMPORTED_MODULE_3___default()), {
                variant: "h2",
                gutterBottom: true,
                children: title
            }),
            children
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Section);


/***/ }),

/***/ 5193:
/***/ ((module) => {

module.exports = require("@emotion/react/jsx-runtime");

/***/ }),

/***/ 2311:
/***/ ((module) => {

module.exports = require("@mui/material/Autocomplete");

/***/ }),

/***/ 19:
/***/ ((module) => {

module.exports = require("@mui/material/Box");

/***/ }),

/***/ 3819:
/***/ ((module) => {

module.exports = require("@mui/material/Button");

/***/ }),

/***/ 8891:
/***/ ((module) => {

module.exports = require("@mui/material/FormControl");

/***/ }),

/***/ 5612:
/***/ ((module) => {

module.exports = require("@mui/material/Grid");

/***/ }),

/***/ 911:
/***/ ((module) => {

module.exports = require("@mui/material/InputLabel");

/***/ }),

/***/ 9271:
/***/ ((module) => {

module.exports = require("@mui/material/MenuItem");

/***/ }),

/***/ 1598:
/***/ ((module) => {

module.exports = require("@mui/material/Paper");

/***/ }),

/***/ 2651:
/***/ ((module) => {

module.exports = require("@mui/material/Select");

/***/ }),

/***/ 9181:
/***/ ((module) => {

module.exports = require("@mui/material/Table");

/***/ }),

/***/ 8823:
/***/ ((module) => {

module.exports = require("@mui/material/TableBody");

/***/ }),

/***/ 8099:
/***/ ((module) => {

module.exports = require("@mui/material/TableCell");

/***/ }),

/***/ 443:
/***/ ((module) => {

module.exports = require("@mui/material/TableContainer");

/***/ }),

/***/ 5953:
/***/ ((module) => {

module.exports = require("@mui/material/TableHead");

/***/ }),

/***/ 4848:
/***/ ((module) => {

module.exports = require("@mui/material/TableRow");

/***/ }),

/***/ 6042:
/***/ ((module) => {

module.exports = require("@mui/material/TextField");

/***/ }),

/***/ 7163:
/***/ ((module) => {

module.exports = require("@mui/material/Typography");

/***/ }),

/***/ 1377:
/***/ ((module) => {

module.exports = require("next-i18next");

/***/ }),

/***/ 5460:
/***/ ((module) => {

module.exports = require("next-i18next/serverSideTranslations");

/***/ }),

/***/ 6641:
/***/ ((module) => {

module.exports = require("next-seo");

/***/ }),

/***/ 968:
/***/ ((module) => {

module.exports = require("next/head");

/***/ }),

/***/ 1853:
/***/ ((module) => {

module.exports = require("next/router");

/***/ }),

/***/ 6689:
/***/ ((module) => {

module.exports = require("react");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [906], () => (__webpack_exec__(3009)));
module.exports = __webpack_exports__;

})();