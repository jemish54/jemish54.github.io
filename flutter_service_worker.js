'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"index.html": "67f8050f37eea803ea8c37ee62842143",
"/": "67f8050f37eea803ea8c37ee62842143",
"flutter_bootstrap.js": "0febc1927e06576cb42a9a789dd884dd",
"assets/assets/svg/cpp.svg": "e5b135b00998f9cd69a38eed9b1eee81",
"assets/assets/svg/email.svg": "99c14f8ef3bf527047167e56e5021217",
"assets/assets/svg/python.svg": "71374043d9b3d9ea7fa09976a747d475",
"assets/assets/svg/x.svg": "602958e0674315e1cd989b3ac5f74567",
"assets/assets/svg/404.svg": "a1c36d16b80c7ecbb9b36868e664644a",
"assets/assets/svg/linkedin.svg": "15b4281ebd93cc246c81200bc3c1fd94",
"assets/assets/svg/instagram.svg": "abc08e76d2b0256d0a0c1815fc091be7",
"assets/assets/svg/mysql.svg": "9a87849cee36242dc6ab7399078e0869",
"assets/assets/svg/framer.svg": "5d0f449e36a5402b819312beea001086",
"assets/assets/svg/github.svg": "4b8a4845e3c03b05cc92e2b3199889d5",
"assets/assets/svg/flutter.svg": "5ff1722cbed36fdb869cba0c95788d42",
"assets/assets/svg/java.svg": "459bbae2e96a2410c5b429eb941a4c11",
"assets/assets/svg/html.svg": "16d07e8682a531f3bc1e9fb01bd59740",
"assets/assets/svg/css.svg": "a55118403c13e2719d453b74dffa80f8",
"assets/assets/svg/dart.svg": "11b770f163584b0e8cbba1f7bc626f55",
"assets/assets/svg/javascript.svg": "0c1f700da144243c526f252e59362138",
"assets/assets/svg/hackerrank.svg": "0b190df020a48e0e8e84f8df5f7a8335",
"assets/assets/svg/blender.svg": "453a6aeb819125a1346f73a69cb28b41",
"assets/assets/svg/figma.svg": "c7ef676648d0a63907b26420105ed20d",
"assets/assets/pfp2.png": "21dd919b44595bdbd3e771ca7eb0e8d4",
"assets/assets/book.png": "fefb25312bac8f08e116baebc1248766",
"assets/assets/i.png": "601d3b98cc215a7de02f1be949c08d38",
"assets/assets/emoji/Airplane.png": "1483f1f11b0100978d3188ca43a1f82b",
"assets/assets/emoji/Gym.png": "5a150ea0e29632878858ca969c4ce743",
"assets/assets/emoji/Magnifier.png": "0121dbce702fcfbf52c2bc97d8e6babd",
"assets/assets/emoji/Brain.png": "1df42512fa24d0f4036d7da4d5854526",
"assets/assets/emoji/Moon.png": "c0b629faae5bdead6af320a76cbe5763",
"assets/assets/emoji/Book.png": "37f0d3a87be8cf4dbbd5faa3fc024269",
"assets/assets/resume/resume_jemish_mavani.pdf": "c6e66762025e532cb222519e99f78030",
"assets/assets/ss/calc.jpg": "a5a99b612e58d79fa07bf9f498cc1586",
"assets/assets/ss/qrcode.jpg": "27605b7b4d2bdb35f7d700b60c44704c",
"assets/assets/ss/appleMusic.jpg": "3bfb535561d59f426bcc4d0d8ca9b84e",
"assets/assets/ss/instagram_clone.jpg": "9f773deae09fc87b3e754af4e4b933f8",
"assets/assets/ss/weather.jpg": "828a37e598ed47b8230309210b14a126",
"assets/assets/ss/toDo.jpg": "46f14714359a7cdb1c5c357cf97e79c1",
"assets/assets/ss/musicplayer.jpg": "76bc1d0caba32ee2451e62de6e3ff9bc",
"assets/assets/ss/greenlife.jpg": "769542290ef1a90f62ca57945c705789",
"assets/assets/ss/plant_ui.jpg": "1c71ee2b7ae94cb1e8dbaa558e9ab32b",
"assets/assets/ss/scorecord.png": "bbdefe8b16e180842a5651556d2bdf04",
"assets/assets/ss/stopWatch.jpg": "d406b4c29098b040d43684bac289277e",
"assets/assets/ss/onlinics.jpg": "9cb437f5e5045f7fa8bb1fc8dba6c483",
"assets/assets/ss/ticTac.jpg": "c4755298de95cc16b2ccbbe1a378aa22",
"assets/assets/ss/moviedb.jpg": "5d92953d5ad235a3c8b59c8cf4391d7d",
"assets/assets/ss/portWeb.jpg": "2facbefc30fb7b09d2f9acf65394e467",
"assets/assets/pfp.jpg": "adf6de49959668c01cb553c60dd6539d",
"assets/AssetManifest.bin": "f07f30cdbee264735bcaa97899a32e3f",
"assets/AssetManifest.bin.json": "b1813a46aed38c8e156f1976eca1dd33",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/AssetManifest.json": "ba0c356be2db60d25d66bbce98a1ce98",
"assets/NOTICES": "751cbce3cafa5c5a912eeb94f3e95bce",
"assets/fonts/MaterialIcons-Regular.otf": "15f882e4f4df8232fdb83c58d22cf10d",
"assets/FontManifest.json": "351c6c24297f254729709c316f4510c8",
"assets/packages/dev_icons/fonts/devicon.ttf": "eb29517242b5a2d2845d59b46359848e",
"assets/packages/flutter_map/lib/assets/flutter_map_logo.png": "208d63cc917af9713fc9572bd5c09362",
"main.dart.js": "b251736d55784776f3fb428bcf4abb6c",
".git/refs/remotes/origin/master": "01afc0bf0ae8d66d1a5db415b6a04086",
".git/refs/heads/master": "01afc0bf0ae8d66d1a5db415b6a04086",
".git/COMMIT_EDITMSG": "8529545506b5f9f51a617630d11b1204",
".git/objects/e5/a2d4147fbe6e0ae9377a7cd17f974a6ba8f009": "341462411a38f03ea42d24a7ffe830a4",
".git/objects/58/24e2bf310edf0eeb47ea79a6e388f6fe349768": "3b3fd43a097f5ea5fe0c614a0bd68bb3",
".git/objects/dc/44ae3993932c3c3485d04a9ee1c8d056a402a8": "56e6a9f5e8b837ddc6d6381ed0c8ef33",
".git/objects/e0/e096a24e59fb9f1e501899389e3905c6c27cd7": "73359fa7932626d48c34734684c71c0f",
".git/objects/e0/7797437d096064bd90c373800dcb0f335c14b0": "16f9b9defb16491f8c733b09b022688c",
".git/objects/2a/5e41946ef59d593d7f80d6f4bf5c69b2bbc14c": "8342b60e1629fb3d14e30c7c4961fd63",
".git/objects/95/00997a62c886bf21a42a9e959a6d57602c4df9": "c6d081c412d3ef0a0c23a9fca902acf9",
".git/objects/1c/10b76bad6d641a83fd969b8d236c5c5b3487be": "6b4f07cc4ffc803b785d8bbbd6c4ff68",
".git/objects/66/43b035f645b8d1a403fbee77e6e03ebfd90c34": "68febdba91ed401a3846420464854ffc",
".git/objects/b1/5ad935a6a00c2433c7fadad53602c1d0324365": "8f96f41fe1f2721c9e97d75caa004410",
".git/objects/80/2cd442ec3cd078984d87b391ffcde41b6bdc47": "3d89a89cb7377a84bb2801f270747d56",
".git/objects/1e/57c3e3ae3b1b576d5495a3dd46a5ac772f7e37": "d89b2cf83ecf9732c7107b9acb0d698d",
".git/objects/9c/f3a386229cdc0e797f85a2fdc29d8b5db69674": "8d6858c1c3bb86c3cce11bccb71f1385",
".git/objects/05/1bf254ad782820627890ef2b0e06fbae63dc6e": "627c47ddb5753c99d82203b3b5a0f310",
".git/objects/05/5e356c961dd5789a2314a983af66907bffcaa4": "67e4fe226b748905ed3288fa0863e3b5",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "3dad9b209346b1723bb2cc68e7e42a44",
".git/objects/96/93404b46511b6da1c3747adda4bccdfd5cbd9e": "ef6b4e87d338bbab9c7a1d959be637f7",
".git/objects/8c/78fdb263118cb6b5fbf5556efabd9daefdae27": "44b9c21056f3ba627769a53f24b355f1",
".git/objects/c2/dda3a42a188b10bcea6ebd74109a56f411f931": "cd693362e03644e1634930532da2b3a0",
".git/objects/61/d95a4295ac534c324f239d21f456ac799fbec2": "0d9dea4951f93267527cb47eca419c74",
".git/objects/ca/474126a857ae44de47c155bbbb1dea85d0628c": "352d15b28c02ec7f01fd5a5020ffc8ae",
".git/objects/ca/5ec2a408eeea83726f08cbc719f95b9cc73fae": "0e3e7e801e6639c7267a0505bc0a741f",
".git/objects/ef/181807f0eb10bbb3a7a53dd1cd6229c97f9727": "a7e2c561716bb1bc8afe4631b1975b0b",
".git/objects/40/0d5b186c9951e294699e64671b9dde52c6f6a0": "f6bd3c7f9b239e8898bace6f9a7446b9",
".git/objects/be/d959ec2fdb493e7657bde4a2479e52e9895aac": "ec6cb238a545fa78c4289c557417e5a2",
".git/objects/84/0516208d35dcb4298847ab835e2ef84ada92fa": "36a4a870d8d9c1c623d8e1be329049da",
".git/objects/50/627fc841a044b18882dbd17fc78aa690a47a59": "0dbd9a8e2867975e5ade82de43ad5ea7",
".git/objects/cf/350eaff1800b72b47d14e0121b5a6eb0b70851": "354d20a8c09a7efc581f064f794e6983",
".git/objects/ba/e517dca8a42eb3ccd173791379caffc58331e4": "17f934cd968b9b10e27d445b909f5c20",
".git/objects/e6/6d694c1b0cedc150e1ddd8baebd857dbe1e28e": "0de3c5e479d600faba211be84bbaf2ff",
".git/objects/5d/d6d1b37645e5be8d0a89c1716a766dfb2c5287": "7101010d5480b8556a4de39da579fbe5",
".git/objects/15/1bb975e19a217d1f22abc364b8a9258dc7186a": "985efd720e8f7bc2e48435e47739b2a4",
".git/objects/2e/e9b4e11f0f20d7299008b8eb03fe3595943643": "54302c2fd9e0b28274d77d8d15ab2822",
".git/objects/bb/7c03889c27ed5c3a2613ff7809f4cfb1478537": "1d7d1ef661a1b9f1d88713e173fa97cc",
".git/objects/5f/0e0789f662597019c9f9f641e7c6b5b79a376c": "f3e960a353c4f1c301be750fe40efae0",
".git/objects/bd/8d0b4ac1e176d52e3a738fa619b063040d7e27": "9fea1467930ec403b0be85644af024db",
".git/objects/28/c81ca7e63e361bf0f2b7d300f6956732aee310": "1758b263e116161606f9397d5671db12",
".git/objects/36/fdf1e64fc49f6b3cd4bc64b2b3ec17a3a74352": "c6961335ce39e049a421c49deb0d9d76",
".git/objects/3a/7525f2996a1138fe67d2a0904bf5d214bfd22c": "ab6f2f6356cba61e57d5c10c2e18739d",
".git/objects/4e/ca0628c00b55c4301b28d7a14d9f0262ba3dc3": "d18f5365a2de6b135e81fa429c8cec1b",
".git/objects/93/fc3770fbee548ae7168426f1ac6729af55c826": "fa2676d810fa45789e5446f68927d050",
".git/objects/7f/0410cca38272e22f2d1feffbf23fde9ed65324": "4da2de2fcf8711f425dd5b9eac10602c",
".git/objects/7d/0ff8de4c189e71d75ebbf67abc1b10c3f96e2b": "a44ee483b1eb2908dd59dba156987799",
".git/objects/6b/e909fbf40b23748412f0ea89bf0fae827ed976": "5f118419157d9534688915220cc803f7",
".git/objects/3d/0c14293980f331970f97c6621749782dad0614": "48249178fb168f98296fbead7ad40135",
".git/objects/0a/f7fbea93426bb32a623c5abbd2fe5699a876e8": "94f81186401fde5d0aa437b8ce40ca84",
".git/objects/4c/b626c698c495b118cff4536755f73836348944": "046eb16caa8df231a57705edaf2a5629",
".git/objects/4c/1c9bc0def6dfeffce4d8adaaa44286796d2dad": "30609ab711c750070a33536aad445f77",
".git/objects/4c/9ec478615d75ae7e74e2d0bb1bada98ec0bcec": "e27458de66e1e37468f274833953f14a",
".git/objects/8d/c9e7819a0f717f8d3ded90ebe25e5059bc34c3": "54ab94dad8f9b5b274783b61081a791d",
".git/objects/71/dd557600498109c8288eb73820f20feb141cab": "41231814b5d34d8a1fca281cd7b68361",
".git/objects/da/fd65422747502c19b5c74b4230282644d2169c": "d8a62caf99a372ff6c7692e143787ce3",
".git/objects/ff/5b6ce6205590cdee52488a36a546fe1b78b095": "449fd1ae644a3cded15d329d266616a3",
".git/objects/f4/26b3b7c6ce0c8c6ba3e2e788ab50b4e57d3ad7": "397a231bfa6ee7b848f8149c55f70a89",
".git/objects/d0/23371979cf1e985205df19078051c10de0a82d": "700b71074bad7afee32068791dec7442",
".git/objects/cb/33e0306fd576d55b2b648747c3805f54848abd": "2115ade34dce11e814394d27f51c0c71",
".git/objects/ed/8b9371e4054f855ffb140969cfd807ef6b68e5": "f93164e0ac658da2ba4c8daeaee0307f",
".git/objects/b9/b62a83805b06180fd12f977693baa849ff7129": "39f4dc78f035691116c4ed4eb55ca864",
".git/objects/22/a959b1e9d97dd5dc7a89883fab40475d637ee4": "c6784aa4c15ccc0ed8599913a62acff5",
".git/objects/7c/e2dd0f2aeb5c3724e612b43c32db5d346a1520": "79a65cb195cf9a2a57cfed8e9c8db7f8",
".git/objects/d1/798ccc1a31b8beeadd751483d5fdb7dbf0d5f0": "a60e5f5ff286597961702f6837815845",
".git/objects/79/75261bd47d0112fab7f5a376e1293e56a55584": "feb014f5ccf06785742c110e165622d3",
".git/objects/0b/9fcf3d6c6058acc662279d9d22099086a0c78a": "0f20d8b31472ed851f3506e98bb44282",
".git/objects/b3/edc6d4578de06d08f87ce98b6f964c3c780b2c": "434eac926944922aee8f4d4d62cde1a8",
".git/objects/b3/a3e32a96da6ba0a69925a332e064f8a6f9b7eb": "70d566c629fd5008f9c9baaa3bfbdd01",
".git/objects/18/d07a01f72eff986f5bbc287e32077511f09be4": "ff7b25d896d222e7cd3bb1b49d52c494",
".git/objects/98/57c9b3b0448c92818efc5fda0f206b21914168": "ecbde07c564dabbec0f249821051b8af",
".git/objects/6c/ae2226d09d9b41d074169a19955cbffa104698": "da238886879bbef0b061a99eed9388e3",
".git/objects/43/d320ed4f16751a3e0ce3f881273db2e214dad7": "b44294d2b87118bc964e5123b4bb1362",
".git/objects/a2/d9a3fcad3203a896d0a783cd289e593255c44d": "ecfa5fa0f9da0efc9ff182a913704d05",
".git/objects/65/fcd5f51ed377172db083613155e671f6c7f001": "2b3d1319f24d930c44075dc6f2a4eb2b",
".git/objects/30/020a1293027d3842a5672df84acad4ee65e3a5": "32ccbdd58c01caddea7e12733ffe9308",
".git/objects/6a/d00940ae067f46ca30903cf9ea43cf788f5a22": "839966cc8bd60ad51e402e0aa9d8b6b4",
".git/objects/2b/942bdf81712feeb5527414a8397f44cb425ab7": "89416c5abce3a8d34186fbd2d5b9a28b",
".git/objects/32/aa3cae58a7432051fc105cc91fca4d95d1d011": "4f8558ca16d04c4f28116d3292ae263d",
".git/objects/44/a8b8e41b111fcf913a963e318b98e7f6976886": "5014fdb68f6b941b7c134a717a3a2bc6",
".git/objects/4a/e913e48087f6e84a01cf2ac0785c71a6e1c0a5": "11f18063adb205c0bd9d7c06adad1861",
".git/objects/53/34cc499aa1042001db02c8f3a37ba0bd9ad04b": "647fcb9447ffe1a0d5e9ddf630c46fb8",
".git/objects/5c/799821e8e4a79f6c2cc48165f3dfac40aee433": "dbc4a3d3622c3bdcb29d4a7a0752cecb",
".git/objects/90/bcfcf0a77ab618a826db0fd8b0942963b653af": "fc109675cdf1233dd6599a4c3c0a7a69",
".git/objects/73/0800c5dc47dfd04bc13d31caa50edb24e80b19": "0eadcb686586aab118071a9d12d4c9f7",
".git/objects/06/9245ac34d45ffef85fc2ea4522ea3082fb73f9": "ac17410b3a3d6679b58c6fd089348e2b",
".git/objects/7a/8b8bce033b732bc35d376700508fa6e3bd3c31": "2f25e399d9c4c6056de84a14f0d65ee6",
".git/objects/7a/931867155e4012323991cff0a1fbfa34eeb1d0": "e2388638737ed2a1d2429f07b3af92d5",
".git/objects/f2/04823a42f2d890f945f70d88b8e2d921c6ae26": "6b47f314ffc35cf6a1ced3208ecc857d",
".git/objects/69/d92b44c8779d39166c9ca2e3cb42f71fdf6caa": "3d70db6329b118f8fd6b73e4d82f16de",
".git/objects/d5/bb50b3c3bc534b51ba035a5e8495ba7af5025b": "81d30e6f235d2cd1960b1a0d917b3043",
".git/objects/d5/e5439b6222a7f0c2e75cb38625ad8daa90f04e": "0b937c64b2fbd58d069d847f958d3ac8",
".git/objects/3c/794157a7035010ddcd7785ec36bd4b246abdd5": "fa6bc1c63d4105c5069310c617844550",
".git/objects/d9/5bacf78f12a88af2a3c78591f36081a4c7d7cc": "10e274fe323d153deb72a676708d1df3",
".git/objects/d9/2cab096b94a60c1126a365f360a826923fe41d": "17fbe4b8966e80de3af6de9e217db3d3",
".git/objects/68/6e93d178d69c7d311b220d3fffa67d63396294": "48ab40c3abfce03aeb4a8bb839041270",
".git/objects/86/03d0a3d2a91580f77171968c7d13e73fd1482a": "dc750bd17c929d834d260dd7dc0293e7",
".git/objects/08/32d0db2def1613c1c45aa4fe9156a1c6b7d589": "e05df183e5eeaddf39672a2516f9c41d",
".git/config": "0ed0ad9da25fb9360bf7aa13e8170efe",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/sendemail-validate.sample": "4d67df3a8d5c98cb8565c07e42be0b04",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "5029bfab85b1c39281aa9697379ea444",
".git/HEAD": "4cf2d64e44205fe628ddd534e1151b58",
".git/index": "10340cfdb5f965da5782fafcfde30a56",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/logs/refs/remotes/origin/master": "fe5779011fa08ac16497de912df64371",
".git/logs/refs/heads/master": "39fe205202a5f136cf0af2accf70ebc5",
".git/logs/HEAD": "39fe205202a5f136cf0af2accf70ebc5",
"canvaskit/skwasm.worker.js": "89990e8c92bcb123999aa81f7e203b1c",
"canvaskit/skwasm.wasm": "39dd80367a4e71582d234948adc521c0",
"canvaskit/canvaskit.js": "728b2d477d9b8c14593d4f9b82b484f3",
"canvaskit/skwasm.js": "ea559890a088fe28b4ddf70e17e60052",
"canvaskit/skwasm.js.symbols": "e72c79950c8a8483d826a7f0560573a1",
"canvaskit/chromium/canvaskit.js": "8191e843020c832c9cf8852a4b909d4c",
"canvaskit/chromium/canvaskit.wasm": "f504de372e31c8031018a9ec0a9ef5f0",
"canvaskit/chromium/canvaskit.js.symbols": "b61b5f4673c9698029fa0a746a9ad581",
"canvaskit/canvaskit.wasm": "7a3f4ae7d65fc1de6a6e7ddd3224bc93",
"canvaskit/canvaskit.js.symbols": "bdcd3835edf8586b6d6edfce8749fb77",
"favicon.png": "6fd711ccaa1aab9c3c09cef528424538",
"version.json": "364c880742eedd9832a2b7e1a7831b6e",
"manifest.json": "3e7c450c533a8f956dc5c3aa285dd24d",
"icons/Icon-maskable-512.png": "983e7bb4010cd46225086d2a07ae7f1a",
"icons/Icon-512.png": "983e7bb4010cd46225086d2a07ae7f1a",
"icons/Icon-maskable-192.png": "b7dc3b5320ecd9f61049d2a5cff1b360",
"icons/Icon-192.png": "b7dc3b5320ecd9f61049d2a5cff1b360",
"flutter.js": "83d881c1dbb6d6bcd6b42e274605b69c"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
