import { Blog } from "../Types/types";

export const getBlogId = () => {
    return (Math.random() * 1000).toString();
};

export const blogsData: Blog[] = [
    {
        date: new Date("2023-02-17T22:18:43-05:00"),
        id: getBlogId(),
        img: "https://www.shutterstock.com/image-vector/web-development-landing-page-people-260nw-1838445880.jpg",
        title: "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet",
        description:
            "There is no one who loves pain itself, who seeks after it and wants to have it, simply because it is pain, who seeks after it and wants to have it, simply because it is pain...",
        content: `<div id="lipsum">
        <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas vel mi velit. Praesent hendrerit est non enim tempor, convallis lobortis ipsum tristique. Nunc at neque sagittis, tempus nulla quis, tincidunt augue. Duis auctor a eros sit amet sodales. Curabitur semper tempus nulla, et scelerisque odio elementum vitae. Suspendisse potenti. Aenean pellentesque egestas metus vel tempor. Duis at magna sed magna suscipit ultrices sed eget arcu. Praesent quis enim condimentum, dictum tortor et, congue neque. Vivamus sapien felis, egestas ut quam at, porta varius massa. Nam gravida et nulla lobortis scelerisque.
        </p>
        <p>
        Aenean et auctor dui, id ullamcorper ipsum. Morbi lobortis dignissim fermentum. Donec rutrum dolor nec mi feugiat aliquam. Proin venenatis faucibus risus, ac posuere ex gravida et. Ut posuere quam lacus, nec pharetra tellus mollis et. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Cras ultricies egestas dui, vitae bibendum enim porta vel. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Maecenas fringilla nec dui in suscipit. Aenean a ex lobortis, imperdiet ligula ut, fermentum orci. Pellentesque tristique sapien at ligula cursus, ut interdum metus rhoncus. Nulla congue, neque vel iaculis feugiat, nulla ipsum auctor odio, et fringilla libero lectus ut mi. Nulla eget molestie neque, non eleifend mi. Vivamus sed tellus tempor, blandit leo et, mattis justo. Fusce sed libero at elit elementum semper.
        </p>
        <p>
        Integer id nulla vel justo varius cursus. Sed aliquam mollis sapien quis sollicitudin. Sed commodo, mi id commodo vestibulum, ipsum nulla lacinia tellus, vitae tempor ipsum nibh auctor libero. Vestibulum eu enim sit amet libero congue pulvinar. Suspendisse sagittis odio quis massa convallis, quis bibendum tortor ultrices. Mauris tincidunt sagittis facilisis. Phasellus a nisl nec ex imperdiet euismod. Mauris porta eget felis eget volutpat. Maecenas a dui quis lectus cursus pretium. Duis id ante iaculis augue varius sodales. Duis vehicula non nisl at gravida. Donec vestibulum lacinia tellus, quis fermentum purus sagittis vitae.
        </p>
        <p>
        Nunc ex lorem, consequat eu efficitur eu, cursus ut eros. Praesent euismod eget metus in congue. Donec consectetur, eros vehicula dignissim pretium, erat sapien commodo mi, at rutrum nisi odio non ipsum. Quisque vel rutrum libero, et placerat leo. Mauris in hendrerit tellus. Proin urna leo, lacinia eu metus eget, viverra gravida urna. Morbi mauris est, tempus eget neque id, euismod lacinia orci. Donec ut pulvinar urna, commodo gravida metus. Nunc in fermentum ex, sit amet sollicitudin dolor. Donec ornare mauris id sapien consectetur facilisis. Sed ut laoreet diam. Quisque eu ullamcorper turpis. Suspendisse potenti.
        </p>
        <p>
        Pellentesque volutpat ex vitae tellus dignissim, vel laoreet neque auctor. Vestibulum at suscipit libero, eget pulvinar ante. Suspendisse vel gravida augue. Vivamus efficitur magna ut quam convallis dictum. Suspendisse aliquam turpis ut mauris iaculis, in dictum dolor feugiat. Nunc at gravida ante. Proin auctor metus lacus, non posuere ante elementum ac.
        </p>
        <p>
        Mauris bibendum porta fermentum. Proin condimentum pretium sapien, sed scelerisque augue. Cras eleifend, quam et hendrerit mattis, justo sapien egestas lorem, eget elementum augue velit non sem. Donec eget ligula eget sapien cursus iaculis eget in purus. Sed hendrerit, nisl et pulvinar tincidunt, massa nunc blandit velit, vitae sagittis orci mauris ac neque. Cras sit amet justo ac nisi ullamcorper ultricies. Morbi sed volutpat erat, quis vestibulum dolor. Nullam sed fringilla tellus, ac euismod ante. Duis sit amet accumsan nunc. Suspendisse potenti. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Ut volutpat sed sapien nec convallis. Cras id nisl a justo posuere consectetur. Nunc quis eros varius, rhoncus nisl quis, varius velit. Maecenas ullamcorper magna non mauris pulvinar sagittis. Duis a efficitur tortor.
        </p>
        <p>
        In in dictum velit. Pellentesque maximus nulla sit amet nisi ultricies hendrerit. Morbi condimentum lacinia lectus id tempor. Nunc vitae tempus orci. Donec eu tortor blandit, hendrerit sapien non, condimentum eros. Maecenas tempor massa ligula, ac lobortis arcu luctus et. Praesent in diam nec dolor dignissim dictum. Sed id consequat nisi. Nam posuere nulla ut nisl vulputate, at aliquam eros scelerisque. In auctor nec tellus in scelerisque. Etiam non tellus massa. Nulla convallis tincidunt massa, sit amet imperdiet metus laoreet a.
        </p>
        <p>
        Nulla vitae elit non purus varius porta. Proin tempor mi vitae dignissim posuere. Vivamus sodales, libero id ultrices commodo, mauris enim laoreet enim, sit amet pharetra est lectus non turpis. Quisque lacinia, metus ut elementum tincidunt, eros arcu accumsan erat, sed vestibulum mi mauris vitae metus. In non hendrerit felis. Phasellus vel ex et augue suscipit venenatis. Nam sit amet massa ut tortor cursus luctus. Nam diam lorem, suscipit nec felis sed, faucibus imperdiet quam. Integer iaculis erat non rhoncus accumsan. Vestibulum in vehicula ex, id iaculis arcu. In venenatis, est ac imperdiet dignissim, turpis justo dapibus nisi, id varius diam diam id nisi. Pellentesque placerat lacus ac leo tempor, sit amet condimentum quam gravida. Phasellus non est scelerisque, cursus lorem euismod, semper arcu.
        </p>
        <p>
        In sodales ante sit amet luctus lacinia. Etiam ultrices sapien ac neque varius fermentum. Sed semper leo a egestas gravida. Praesent at maximus ipsum. Aenean pellentesque porta commodo. Sed id porta est, porttitor molestie orci. Suspendisse id pellentesque purus. Duis iaculis nibh justo, a egestas dui aliquet sed. Pellentesque convallis ac nibh in fringilla. Aenean molestie blandit imperdiet. Quisque porta consequat felis in faucibus. Ut aliquet fringilla magna quis sollicitudin. Proin lacinia venenatis tellus sed commodo. Donec ultrices, ipsum eu pharetra varius, dui odio tristique risus, vel lobortis purus risus ac justo. Quisque a feugiat diam, at rhoncus enim.
        </p>
        <p>
        Aenean egestas volutpat turpis vel cursus. Sed non tempor turpis, non ultricies est. Fusce est lorem, efficitur non ultrices sed, ultrices at lorem. Curabitur sollicitudin molestie maximus. Donec at rhoncus magna, dignissim blandit tortor. Aliquam arcu quam, lacinia iaculis erat ut, consequat sollicitudin urna. Donec id purus eget felis suscipit tincidunt. Integer vehicula eu lectus eu molestie. Suspendisse ullamcorper euismod ligula, at tempus purus.
        </p></div>`,
    },

    {
        date: new Date("2022-12-10T22:18:43-05:00"),
        id: getBlogId(),
        img: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/04/ChatGPT_logo.svg/180px-ChatGPT_logo.svg.png",
        title: "Nullam aliquet, nibh a tristique hendrerit",
        description:
            " Nullam aliquet, nibh a tristique hendrerit, augue nunc laoreet sapien, vitae vehicula neque mauris in velit. Integer non felis eu augue cursus bibendum in sit amet mi. In non dignissim ligula. Donec quis magna vitae leo placerat maximus. Sed ullamcorper accumsan libero, ut rhoncus elit dapibus nec. Donec sit amet auctor libero. Fusce at interdum eros. Donec sit amet felis ac urna auctor pulvinar. Duis nec gravida magna. Cras ultricies nibh eget efficitur pellentesque. Curabitur efficitur dui sit amet augue ultrices, eget dapibus sapien molestie.",
        content: `<div id="lipsum">
        <div>
        <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla feugiat odio risus, id aliquet massa cursus et. Sed aliquam leo id sollicitudin sollicitudin. Quisque iaculis eros a ligula iaculis commodo a quis ex. Donec a consequat augue. Praesent dictum, magna non cursus viverra, nunc felis pretium tellus, rhoncus luctus nisl nulla nec sapien. Etiam feugiat finibus sapien ut tincidunt. Aenean metus odio, bibendum ut lacus at, consequat vehicula purus. Proin facilisis libero in nisl lobortis tempus. Curabitur vel felis ut dui pellentesque sollicitudin nec vel metus. Nulla a condimentum risus, eu imperdiet lacus.
        </p>
        <p>
        Nullam aliquet, nibh a tristique hendrerit, augue nunc laoreet sapien, vitae vehicula neque mauris in velit. Integer non felis eu augue cursus bibendum in sit amet mi. In non dignissim ligula. Donec quis magna vitae leo placerat maximus. Sed ullamcorper accumsan libero, ut rhoncus elit dapibus nec. Donec sit amet auctor libero. Fusce at interdum eros. Donec sit amet felis ac urna auctor pulvinar. Duis nec gravida magna. Cras ultricies nibh eget efficitur pellentesque. Curabitur efficitur dui sit amet augue ultrices, eget dapibus sapien molestie.
        </p>
        <p>
        Ut vitae nunc sit amet tortor tristique gravida. Morbi consectetur nec erat eu ornare. Pellentesque non ipsum porta, suscipit arcu ac, accumsan magna. Fusce a pulvinar nulla. Cras hendrerit eget purus et luctus. Integer sit amet pharetra massa. Praesent at ullamcorper ante, et condimentum lorem. Interdum et malesuada fames ac ante ipsum primis in faucibus.
        </p></div>
        <p>
        </p><ul>
        <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
        <li>Aliquam id nisi at leo convallis egestas in vitae justo.</li>
        <li>Ut consequat diam quis sapien luctus, a fermentum dui ultrices.</li>
        </ul>
        <p></p>
        <p>
        </p><ul>
        <li>Nunc a felis fermentum sapien fermentum sollicitudin.</li>
        <li>Nulla cursus felis consequat, consequat augue quis, luctus arcu.</li>
        <li>Praesent quis sem eget tortor scelerisque euismod sed et massa.</li>
        <li>Nullam imperdiet dui nec vehicula gravida.</li>
        </ul>
        <p></p>
        <p>
        </p><ul>
        <li>Aliquam eget nisl in sapien dapibus sagittis.</li>
        <li>Nulla sit amet diam scelerisque nisi rhoncus commodo.</li>
        <li>Sed sit amet risus vel leo rutrum venenatis.</li>
        <li>Ut feugiat lorem id nisl pharetra tincidunt.</li>
        <li>Ut pretium magna vitae augue pretium fringilla.</li>
        <li>Praesent dapibus est quis libero consectetur, non condimentum lorem venenatis.</li>
        </ul>
        <p></p>
        <p>
        </p><ul>
        <li>Vestibulum dignissim quam eu porta aliquam.</li>
        <li>Mauris pretium libero at dolor rutrum rutrum.</li>
        </ul>
        <p></p>
        <p>
        </p><ul>
        <li>Phasellus posuere mauris et pharetra convallis.</li>
        <li>Curabitur lacinia ex non malesuada congue.</li>
        <li>Pellentesque id lectus ac nunc facilisis ullamcorper eu eu est.</li>
        <li>Nullam mollis turpis eget odio vulputate viverra.</li>
        <li>Duis vulputate erat id nunc vestibulum scelerisque.</li>
        </ul>
        <p></p>
        <p>
        </p><ul>
        <li>Curabitur ultrices massa at imperdiet ullamcorper.</li>
        <li>Maecenas quis odio bibendum, sagittis lacus vitae, tincidunt dolor.</li>
        <li>Morbi condimentum mauris a tempor mattis.</li>
        </ul>
        <p></p>
        <p>
        </p><ul>
        <li>Cras vel purus sed leo tempus mattis.</li>
        <li>Nam bibendum dolor eget lorem elementum, at cursus urna ultricies.</li>
        <li>Nulla rhoncus eros vel mollis volutpat.</li>
        </ul>
        <p></p>
        <p>
        </p><ul>
        <li>Pellentesque vehicula dui a mi cursus, non tempus libero hendrerit.</li>
        <li>Fusce faucibus ex quis mi tincidunt, eu pharetra leo dignissim.</li>
        </ul>
        <p></p>
        <p>
        </p><ul>
        <li>Integer molestie neque sit amet diam auctor sodales.</li>
        <li>Nullam rhoncus neque quis consectetur dapibus.</li>
        <li>Pellentesque fermentum nunc et porta tempor.</li>
        <li>Morbi eget mauris commodo, vestibulum purus rhoncus, ullamcorper purus.</li>
        </ul>
        <p></p>
        <p>
        </p><ul>
        <li>Curabitur quis felis sagittis est laoreet porta.</li>
        <li>Integer dapibus tortor nec ante efficitur, eu facilisis nisl molestie.</li>
        <li>Sed pulvinar sapien eget orci pharetra tristique.</li>
        <li>Phasellus pellentesque nisl non ligula dictum dapibus.</li>
        <li>Fusce quis leo aliquet, consectetur nisi a, aliquam metus.</li>
        </ul>
        <p></p></div>`,
    },

    {
        date: new Date("2019-09-17T22:18:43-05:00"),
        id: getBlogId(),
        img: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/04/ChatGPT_logo.svg/180px-ChatGPT_logo.svg.png",
        title: "Integer sit amet massa maximus justo ",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        content: `
        <div id="lipsum">
        <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec commodo interdum justo, a tristique enim interdum eu. Vestibulum ut quam eu neque auctor ultrices non a magna. Nulla eget pretium tortor. Suspendisse mattis pellentesque leo quis commodo. Aliquam mi erat, ullamcorper at neque vel, vulputate lobortis sapien. Integer interdum quam neque, a feugiat est varius quis. Nulla fermentum vestibulum cursus. Proin quis massa pulvinar, hendrerit nisl laoreet, interdum felis. Fusce finibus gravida justo, nec vestibulum quam gravida id. Suspendisse potenti. Curabitur facilisis velit a aliquam eleifend. Nullam ultrices enim mauris, fermentum tincidunt lectus volutpat et. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.
        </p>
        <p>
        </p><ul>
        <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
        <li>Integer sit amet massa maximus justo porta posuere in dictum quam.</li>
        </ul>
        <p></p>
        <p>
        </p><ul>
        <li>Mauris vitae tellus a turpis bibendum sodales.</li>
        <li>In non dui vitae augue ultricies gravida.</li>
        </ul>
        <p></p>
        <p>
        </p><ul>
        <li>Phasellus sed elit sodales, feugiat nibh non, vulputate nibh.</li>
        <li>Nam lobortis diam molestie, fringilla urna id, accumsan dui.</li>
        </ul>
        <p></p>
        <p>
        </p><ul>
        <li>Mauris convallis mi vel nulla pretium blandit.</li>
        <li>Sed quis enim congue, dictum tortor eu, dapibus urna.</li>
        </ul>
        <p></p></div>
        `,
    },

    {
        date: new Date("2019-01-17T22:18:43-05:00"),
        id: getBlogId(),
        img: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/04/ChatGPT_logo.svg/180px-ChatGPT_logo.svg.png",
        title: " Sed rutrum pretium orci ac maximus.",
        description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec eget ex nibh.",
        content: `<div id="lipsum">
        <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec eget ex nibh. Sed rutrum pretium orci ac maximus. In augue est, ornare nec dui vitae, lacinia malesuada mauris. In ut fringilla tortor, eu semper nibh. Mauris non posuere mi, eget ornare orci. Cras varius lectus et neque gravida, et rhoncus arcu lacinia. Aliquam erat volutpat. Sed et gravida elit. Vestibulum lectus nulla, blandit ut ullamcorper et, pellentesque eu quam. Nulla facilisi. Mauris tristique interdum ipsum sit amet lobortis. Donec luctus, est at ultricies accumsan, turpis massa ultrices risus, ac sodales turpis dolor et urna.
        </p>
        
        <p>
        </p>
        <ul>
        <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
        <li>Sed malesuada diam a dignissim sollicitudin.</li>
        <li>Praesent in erat dictum, sodales nunc et, pulvinar justo.</li>
        <li>Vivamus rhoncus velit vitae diam placerat sagittis.</li>
        <li>Nam nec lacus bibendum, sagittis nunc eu, fringilla risus.</li>
        </ul>
        <p></p>
        <p>
        </p><ul>
        <li>Vivamus hendrerit nisl ut odio iaculis lacinia.</li>
        <li>Phasellus ac ex auctor, luctus elit eget, dapibus ligula.</li>
        <li>Nulla interdum tellus sed massa aliquet tempus.</li>
        <li>Integer non purus eget dui bibendum condimentum.</li>
        <li>Curabitur convallis nulla nec dolor fermentum imperdiet.</li>
        </ul>
        <p></p>
        <p>
        </p><ul>
        <li>Fusce ac massa pellentesque, molestie risus quis, dictum ante.</li>
        <li>Fusce sit amet nibh in diam tristique tristique id sed mi.</li>
        <li>Donec faucibus metus sit amet felis blandit, a molestie mauris sollicitudin.</li>
        <li>Donec ac magna ultricies, bibendum tortor id, porta ante.</li>
        <li>Quisque vitae enim non nisl pretium maximus.</li>
        </ul>
        <p></p>
        <p>
        </p><ul>
        <li>Sed vel ex posuere, efficitur risus sit amet, bibendum lacus.</li>
        <li>Aliquam interdum ipsum commodo ipsum tincidunt, eget pulvinar erat condimentum.</li>
        </ul>
        <p></p>
        
        </div>`,
    },

    {
        date: new Date("2019-06-17T22:18:43-05:00"),
        id: getBlogId(),
        title: "Suspendisse accumsan sollicitudin orci",
        description:
            "Nulla mollis enim non nibh pretium ullamcorper. Integer non dictum ante. Curabitur rhoncus quam elit, vitae dapibus mauris fermentum tempor.",
        content: `<div id="lipsum">
        <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum dictum urna ultricies arcu malesuada tincidunt. Curabitur eget odio quam. Nulla mollis enim non nibh pretium ullamcorper. Integer non dictum ante. Curabitur rhoncus quam elit, vitae dapibus mauris fermentum tempor. Suspendisse accumsan sollicitudin orci, in scelerisque lacus porttitor sit amet. Morbi id suscipit diam, sed accumsan lacus. Vivamus ornare orci vitae ligula maximus, in pulvinar ex finibus. Sed tincidunt sem eget nunc aliquam, a auctor justo euismod. Mauris sem augue, posuere a nibh commodo, suscipit auctor tortor.
        </p>
        <p>
        </p><ul>
        <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
        <li>Sed viverra mauris sit amet egestas molestie.</li>
        <li>Phasellus sed orci a nisi aliquam laoreet.</li>
        <li>Proin vitae metus lacinia, dictum est ut, rhoncus sapien.</li>
        <li>Nunc dictum velit ac iaculis consectetur.</li>
        </ul>
        <p></p></div>`,
    },

    {
        date: new Date("2019-05-17T22:18:43-05:00"),
        id: getBlogId(),
        title: "Nulla vel ante enim. Phasellus cursus purus sed tempus feugiat.",
        description:
            "Proin at arcu non magna cursus vehicula vitae vel leo. Aenean id euismod lacus, at maximus quam. Phasellus eu velit odio. Vivamus nec placerat libero, id euismod quam. Suspendisse non lorem non lacus pharetra tempus. Praesent interdum, ex in aliquam sodales, ex lectus tristique dui,",
        content: `<div id="lipsum">
        <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin at arcu non magna cursus vehicula vitae vel leo. Aenean id euismod lacus, at maximus quam. Phasellus eu velit odio. Vivamus nec placerat libero, id euismod quam. Suspendisse non lorem non lacus pharetra tempus. Praesent interdum, ex in aliquam sodales, ex lectus tristique dui, ut euismod tortor neque a urna. Etiam eleifend efficitur nisi a finibus.
        </p>
        <p>
        Nulla vel ante enim. Phasellus cursus purus sed tempus feugiat. Praesent odio quam, aliquet sed libero ac, rutrum vehicula augue. Fusce tempor lorem sit amet sem posuere commodo. Nam ut magna quis nibh ullamcorper maximus viverra vel nisi. Phasellus a risus libero. Phasellus placerat aliquam leo tristique tempus. Suspendisse blandit nulla lacus, vel fermentum ligula facilisis et. Nulla consequat interdum magna et placerat. Donec quis sem mauris. Pellentesque ultricies justo non odio laoreet aliquam. Etiam scelerisque lacus pretium dictum pharetra. Nullam vestibulum risus ac convallis ullamcorper. Proin blandit eleifend erat, sit amet aliquet mi efficitur eu. Quisque hendrerit accumsan consectetur. Nunc ultricies vulputate arcu, viverra vehicula erat egestas ac.
        </p>
        <p>
        Suspendisse porta in elit vel condimentum. Ut vitae finibus nunc. Nulla sit amet ligula a odio porta imperdiet ut eget lacus. Ut efficitur pellentesque gravida. Ut rutrum, mi eget lacinia varius, dolor ligula aliquam dui, eget sagittis purus erat id magna. Quisque ante diam, hendrerit nec feugiat sed, congue sed neque. Vestibulum commodo sit amet nibh sed fringilla. Suspendisse potenti. Donec fermentum nisi eget nunc malesuada, vitae hendrerit lectus malesuada. Curabitur elementum nunc non iaculis cursus. Sed arcu ante, porta a magna vel, posuere ornare lorem.
        </p>
        <p>
        Cras et suscipit nisi, eu efficitur nulla. Aliquam non congue ex. Etiam sollicitudin enim id mollis interdum. Aenean scelerisque tortor et libero porttitor tempor. Sed sapien elit, dapibus et sapien at, suscipit condimentum enim. Curabitur convallis nisl libero, ac feugiat massa luctus interdum. Nulla sit amet dictum diam. In ut orci ac massa pretium auctor. Sed vel gravida dolor. In interdum efficitur mattis. Suspendisse venenatis ex nec justo lobortis, a gravida lorem molestie. Sed velit mauris, iaculis a blandit nec, gravida quis ante. Aliquam sollicitudin, dui posuere interdum accumsan, purus dolor mollis mauris, ut blandit arcu est et mauris. Nunc lacinia ante ac dui posuere pretium.
        </p>
        <p>
        Nam scelerisque mauris nulla, eget condimentum nibh egestas ac. Suspendisse potenti. Curabitur eu interdum enim. Integer sed ultrices augue. Mauris sollicitudin finibus mi quis commodo. Suspendisse posuere sem at tellus efficitur ornare. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam quis facilisis nibh. Suspendisse cursus nulla ut metus consequat hendrerit. Donec vitae dolor vitae est vulputate mollis nec in sem. Quisque dapibus leo in mi pharetra, vel aliquam orci accumsan. Maecenas at congue purus, a molestie mauris. Nullam rutrum enim vitae dui gravida fermentum. Proin sed ante ac massa malesuada dapibus. Donec nec tincidunt libero. Aenean vitae mattis quam.
        </p></div>`,
    },

    {
        date: new Date("2019-04-17T22:18:43-05:00"),
        id: getBlogId(),
        title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        description:
            "Phasellus malesuada in dui fringilla condimentum. Pellentesque metus sapien, pretium eget nulla nec, facilisis maximus nibh. Integer et nisi ipsum. Proin non metus imperdiet, accumsan ipsum non, ornare felis.",
        content: `
            <div>
            <div id="lipsum">
        <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus congue euismod tellus eget ultricies. Curabitur at dolor odio. Pellentesque non augue quis ipsum aliquam tristique. Phasellus malesuada in dui fringilla condimentum. Pellentesque metus sapien, pretium eget nulla nec, facilisis maximus nibh. Integer et nisi ipsum. Proin non metus imperdiet, accumsan ipsum non, ornare felis.
        </p>
        <p>
        Sed lacinia mollis augue quis interdum. Ut at ipsum in lorem mollis convallis nec quis eros. Nam vel porta dui, et laoreet elit. Integer ac erat accumsan, faucibus magna vehicula, dapibus quam. Suspendisse sit amet ante quis leo molestie ultricies et ac nunc. Phasellus ac ornare dolor, sed dignissim enim. Sed vehicula bibendum sem vitae elementum. Praesent ut consectetur risus. Proin cursus luctus ligula quis pulvinar. Donec congue tempor enim, quis ultrices dolor sagittis vitae. Nullam quis lorem diam. Fusce a eros interdum, bibendum dui in, scelerisque enim. Fusce sit amet mauris volutpat, venenatis mauris a, semper orci. Mauris vel mauris mi. Phasellus egestas diam a nulla malesuada, sit amet hendrerit lectus mattis.
        </p>
        </div>
        <p>
        </p><ul>
        <li>Aenean et dui a lorem vehicula tincidunt et sit amet nulla.</li>
        <li>Praesent venenatis magna quis vehicula convallis.</li>
        <li>Sed aliquam velit in ex efficitur elementum.</li>
        </ul>
        <p></p>
        <p>
        </p><ul>
        <li>Sed rutrum nisi at lacus semper ornare.</li>
        <li>Proin vel massa at nunc gravida auctor.</li>
        <li>Nunc efficitur est vitae massa commodo, eget sodales lectus posuere.</li>
        <li>Phasellus semper est eget mi tempus, id efficitur lectus pretium.</li>
        </ul>
        <p></p>
        <p>
        </p><ul>
        <li>Cras vel metus congue, ullamcorper mi eu, pulvinar velit.</li>
        <li>Fusce finibus nunc id nibh ultrices consectetur.</li>
        <li>Phasellus vitae ex vehicula, viverra leo ac, placerat neque.</li>
        <li>Sed tincidunt ante vitae ipsum commodo, non sodales diam sollicitudin.</li>
        </ul>
        <p></p>
        <p>
        </p><ul>
        <li>Maecenas nec lectus rutrum, pellentesque odio fermentum, maximus nibh.</li>
        <li>Duis ornare ipsum sit amet augue efficitur consectetur.</li>
        </ul>
        <p></p>
        <p>
        </p><ul>
        <li>Quisque sit amet odio fringilla, viverra arcu ac, maximus risus.</li>
        <li>Praesent eleifend felis eu leo ultricies, a convallis urna sollicitudin.</li>
        <li>Vivamus rhoncus ipsum id dignissim bibendum.</li>
        <li>Duis vitae odio non ipsum maximus ultrices.</li>
        <li>Morbi porta est eget ligula elementum posuere.</li>
        </ul>
        <p></p>
        <p>
        </p><ul>
        <li>Nulla rhoncus neque et ligula varius feugiat.</li>
        <li>Integer malesuada quam non enim sollicitudin iaculis.</li>
        </ul>
        <p></p>
        <p>
        </p><ul>
        <li>Sed et leo rhoncus, mattis mi eu, tempus massa.</li>
        <li>Phasellus vel ante consectetur diam aliquam ullamcorper vel quis justo.</li>
        </ul>
        <p></p>
        <p>
        </p><ul>
        <li>Proin ultrices sem ac ligula consectetur, sit amet aliquam sem interdum.</li>
        </ul>
        <p></p>
        <p>
        </p><ul>
        <li>Donec eleifend dolor vitae mauris ullamcorper porta.</li>
        <li>Mauris eu turpis quis metus porttitor consectetur.</li>
        </ul>
        <p></p>
        <p>
        </p><ul>
        <li>Quisque vel ipsum a nisi vehicula imperdiet.</li>
        <li>Praesent congue nibh luctus, sagittis eros id, scelerisque magna.</li>
        </ul>
        <p></p>
        <p>
        </p><ul>
        <li>Fusce finibus quam vitae quam cursus ornare.</li>
        <li>Praesent a lorem pretium, aliquam nunc pulvinar, aliquet nulla.</li>
        <li>Suspendisse consequat risus at enim tempus, nec interdum sem lobortis.</li>
        <li>Mauris imperdiet odio nec orci accumsan, et volutpat ligula pharetra.</li>
        <li>Cras vitae mi sed nisi viverra dapibus pulvinar vitae diam.</li>
        </ul>
        <p></p>
        <p>
        </p><ul>
        <li>Nunc pulvinar lorem vel lorem maximus, quis ultrices erat posuere.</li>
        <li>Aenean a diam tempus, viverra velit a, vulputate ligula.</li>
        <li>Suspendisse sed elit malesuada, molestie enim non, fermentum nisi.</li>
        <li>Praesent mattis sem ac augue fermentum, non congue risus laoreet.</li>
        <li>Nullam cursus lacus nec libero convallis, tincidunt sollicitudin risus bibendum.</li>
        </ul>
        <p></p>
        <p>
        </p><ul>
        <li>Donec quis lacus tempor odio finibus vestibulum quis nec augue.</li>
        <li>Morbi congue turpis vel molestie accumsan.</li>
        <li>Sed tincidunt odio non nisi venenatis, eget consequat metus molestie.</li>
        <li>Suspendisse sit amet arcu non augue posuere pellentesque.</li>
        </ul>
        <p></p>
        <p>
        </p><ul>
        <li>Vestibulum nec nibh consequat, congue enim vitae, cursus nulla.</li>
        <li>Morbi sed velit vehicula, malesuada purus eu, tristique ante.</li>
        <li>Morbi maximus libero efficitur justo porttitor, ac elementum metus dapibus.</li>
        </ul>
        <p></p>
        <p>
        </p><ul>
        <li>Vestibulum nec sapien ultrices, eleifend lacus eu, dapibus risus.</li>
        <li>Praesent non felis a est fringilla finibus tempor eget nisi.</li>
        <li>Aliquam ut augue ultricies, condimentum leo in, placerat orci.</li>
        <li>Maecenas eu urna hendrerit, pulvinar quam eu, dapibus dui.</li>
        <li>Fusce suscipit elit nec nisi efficitur tempus.</li>
        </ul>
        <p></p></div>
            `,
    },
];
