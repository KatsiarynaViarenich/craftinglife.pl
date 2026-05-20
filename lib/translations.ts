export const languages = {
    pl: "Polski",
    uk: "Українська",
    ru: "Русский",
    en: "English",
} as const;

export type Language = keyof typeof languages;

export const translations = {
    pl: {
        "nav": {
            "portfolio": "Realizacje",
            "services": "Usługi",
            "about": "O Nas",
            "testimonials": "Opinie",
            "contact": "Kontakt",
            "getQuote": "Darmowa Wycena"
        },
        "hero": {
            "tagline": "ALT-remonty - Wykończenia Mieszkań",
            "title": "Twoje Wnętrze, ",
            "titleHighlight": "Nasza Precyzja",
            "description": "Najwyższa jakość, terminowość i profesjonalne doradztwo. Zapewniamy 2 lata rękojmi na nasze usługi, dbając o każdy szczegół Twojego mieszkania.",
            "cta": "Skontaktuj się z nami",
            "ctaSecondary": "Nasze realizacje",
            "stats": {
                "years": "Lat Doświadczenia",
                "projects": "Wykończonych Wnętrz",
                "countries": "Krajów Działalności",
                "warranty": "Lata Rękojmi"
            }
        },
        "portfolio": {
            "tagline": "Nasze Realizacje",
            "title": "Projekty, Które Definiują ",
            "titleHighlight": "Perfekcję",
            "description": "Zobacz, jak zmieniamy puste przestrzenie w gotowe do zamieszkania, piękne i funkcjonalne wnętrza.",
            "filters": {
                "all": "Wszystkie",
                "residential": "Mieszkania",
                "commercial": "Komercyjne",
                "renovation": "Remonty",
                "industrial": "Inne"
            },
            "viewProject": "Zobacz projekt",
            "lightbox": {
                "clickToZoom": "Kliknij, aby powiększyć",
                "clickToZoomOut": "Kliknij, aby pomniejszyć"
            },
            "projects": {
                "1": {
                    "title": "Nowoczesne Mieszkanie",
                    "description": "Kompleksowe wykończenie mieszkania w stylu nowoczesnym."
                },
                "2": {
                    "title": "Apartament Loftowy",
                    "description": "Wykończenie wnętrz z zachowaniem industrialnego charakteru."
                },
                "3": {
                    "title": "Generalny Remont Kamienicy",
                    "description": "Pełna przebudowa i wymiana instalacji w starej kamienicy."
                },
                "4": {
                    "title": "Przestrzeń Biurowa",
                    "description": "Adaptacja lokalu pod przestrzeń biurową."
                },
                "5": {
                    "title": "Kawalerka Pod Klucz",
                    "description": "Szybki i solidny remont kawalerki pod wynajem."
                },
                "6": {
                    "title": "Salon Premium",
                    "description": "Ekskluzywne wykończenie z dbałością o każdy detal."
                },
                "7": {
                    "title": "Premium Salon",
                    "description": "Exclusive finishing with attention to every detail."
                },
                "8": {
                    "title": "Premium Salon",
                    "description": "Exclusive finishing with attention to every detail."
                },
                "9": {
                    "title": "Premium Salon",
                    "description": "Exclusive finishing with attention to every detail."
                }
            }
        },
        "services": {
            "tagline": "Nasze Usługi",
            "title": "Kompleksowe Wykończenia ",
            "titleHighlight": "Wnętrz",
            "description": "Oferujemy pełen zakres usług wykończeniowych, od doradztwa i projektu po finalne sprzątanie.",
            "items": {
                "residential": {
                    "title": "Wykończenia pod klucz",
                    "description": "Kompleksowe wykończenie mieszkań i domów ze stanu deweloperskiego."
                },
                "commercial": {
                    "title": "Prace Glazurnicze",
                    "description": "Profesjonalne układanie płytek, gresu, terakoty."
                },
                "renovation": {
                    "title": "Malowanie i Gładzie",
                    "description": "Gładzie gipsowe oraz idealne malowanie ścian i sufitów."
                },
                "projectManagement": {
                    "title": "Instalacje Elektryczne i Hydrauliczne",
                    "description": "Kompletna przeróbka i modernizacja instalacji w mieszkaniach."
                },
                "design": {
                    "title": "Podłogi i Panele",
                    "description": "Układanie każdego rodzaju podłóg drewnianych i paneli."
                },
                "consulting": {
                    "title": "Doradztwo",
                    "description": "Profesjonalna pomoc w doborze materiałów i układu wnętrza."
                }
            }
        },
        "about": {
            "tagline": "Więcej O Nas",
            "title": "Stawiamy na ",
            "titleHighlight": "Jakość i Terminowość",
            "description": "ALT-remonty to doświadczona ekipa, która od lat zajmuje się wykończeniem mieszkań na najwyższym poziomie. Nasza wiedza i zaangażowanie gwarantują sukces każdego projektu.",
            "descriptionSecondary": "Rozumiemy, jak ważny jest spokój podczas remontu. Dlatego dbamy o terminowość, służymy radą na każdym etapie prac i oferujemy 2-letnią rękojmię na nasze usługi. Jakość zawsze na pierwszym miejscu.",
            "highlights": {
                "licensed": "Rękojmia 2 lata",
                "safety": "Najwyższa jakość wykonania",
                "warranty": "Dotrzymywanie terminów",
                "sustainable": "Fachowe doradztwo"
            },
            "stats": {
                "founded": "Godzin doradztwa",
                "employees": "Członków Ekipy",
                "awards": "Lata na rynku"
            }
        },
        "testimonials": {
            "tagline": "Opinie Klientów",
            "title": "Zaufali Nam ",
            "titleHighlight": "Zadowoleni Klienci",
            "description": "Sprawdź, co mówią o nas osoby, które powierzyły nam wykończenie swoich wnętrz.",
            "reviews": {
                "review1": {
                    "text": "Doskonała współpraca! Pracę remontowe wykonane w pełni profesjonalnie, wszystko na tip top. Dbałość dosłownie o każdy szczegół. Rzetelna i doskonała komunikacja. Szczerze polecam i już nikogo innego nie będę szukać w przypadku nowych remontów.",
                    "author": "Zadowolony Klient",
                    "role": "Właściciel Mieszkania",
                    "location": "Wykończenie Wnętrz"
                },
                "review2": {
                    "text": "Profesjonalne podejście do klienta. Szybkie rozwiązanie napotkanego problemu, oraz bardzo fachowe doradztwo. Polecam.",
                    "author": "Zadowolony Klient",
                    "role": "Właściciel",
                    "location": "Wykończenie łazienki"
                },
                "review3": {
                    "text": "Jestem bardzo zadowolony ze współpracy z firmą Andrzej Łysakowski, która położyła u mnie nową instalację elektryczną, oraz gładź i pomalowali ściany.\nProfesjonalne podejście do klienta, pomoc na każdym etapie remontu. Ekspresowa obsługa, jakość na najwyższym poziomie, z której jestem bardzo zadowolony. Świetny i zgrany zespół.\nDziękuję za współpracę. :)",
                    "author": "Zadowolony Klient",
                    "role": "Klient Indywidualny",
                    "location": "Wykończenie wnętrza"
                }
            }
        },
        "contact": {
            "tagline": "Kontakt",
            "title": "Porozmawiajmy o Twoim ",
            "titleHighlight": "Projekcie",
            "description": "Zadzwoń do nas lub napisz! Chętnie doradzimy i umówimy się na bezpłatną wycenę.",
            "form": {
                "firstName": "Imię",
                "lastName": "Nazwisko",
                "email": "E-mail",
                "phone": "Numer Telefonu",
                "projectType": "Typ Zlecenia",
                "projectTypes": {
                    "select": "Wybierz typ",
                    "residential": "Wykończenie deweloperskie",
                    "commercial": "Generalny remont",
                    "renovation": "Tylko łazienka",
                    "industrial": "Drobne prace / Inne",
                    "other": "Inne"
                },
                "budget": "Szacowany Budżet",
                "budgets": {
                    "select": "Wybierz budżet",
                    "under100k": "Poniżej 50 000 PLN",
                    "range100k500k": "50 000 - 150 000 PLN",
                    "range500k1m": "150 000 - 300 000 PLN",
                    "over1m": "Powyżej 300 000 PLN"
                },
                "message": "Szczegóły",
                "messagePlaceholder": "Opisz krótko zakres prac...",
                "submit": "Wyślij Wiadomość",
                "submitting": "Wysyłanie..."
            },
            "info": {
                "title": "Dane Kontaktowe",
                "description": "Nasz zespół z przyjemnością odpowie na wszelkie pytania.",
                "visit": "Siedziba firmy",
                "call": "Zadzwoń",
                "callHours": "Pon-Sob: 8:00 - 18:00",
                "email": "Napisz E-mail",
                "emailResponse": "Odpowiadamy najszybciej jak to możliwe"
            }
        },
        "footer": {
            "description": "ALT-remonty: najwyższa jakość, dotrzymywanie terminów, fachowe doradztwo i 2 lata rękojmi. Twój sprawdzony wykonawca.",
            "quickLinks": "Na Skróty",
            "services": "Usługi",
            "contactInfo": "Kontakt",
            "newsletter": {
                "title": "Bądź na bieżąco",
                "description": "Jeżeli chcesz wiedzieć więcej o naszych wolnych terminach.",
                "placeholder": "Twój e-mail",
                "button": "Zapisz się"
            },
            "rights": "Wszelkie prawa zastrzeżone.",
            "links": {
                "privacy": "Polityka Prywatności",
                "terms": "Regulamin",
                "sitemap": "Mapa Strony"
            }
        }
    },
    uk: {
        "nav": {
            "portfolio": "Роботи",
            "services": "Послуги",
            "about": "Про нас",
            "testimonials": "Відгуки",
            "contact": "Контакти",
            "getQuote": "Безкоштовна оцінка"
        },
        "hero": {
            "tagline": "ALT-remonty - Оздоблення Квартир",
            "title": "Ваш Інтер'єр, ",
            "titleHighlight": "Наша Точність",
            "description": "Найвища якість, своєчасність та професійні консультації. Ми надаємо 2 роки гарантії на наші послуги, дбаючи про кожну деталь вашої квартири.",
            "cta": "Зв'яжіться з нами",
            "ctaSecondary": "Наші роботи",
            "stats": {
                "years": "Років досвіду",
                "projects": "Завершених квартир",
                "countries": "Країн діяльності",
                "warranty": "Роки гарантії"
            }
        },
        "portfolio": {
            "tagline": "Наші роботи",
            "title": "Проєкти, Які Визначають ",
            "titleHighlight": "Досконалість",
            "description": "Подивіться, як ми перетворюємо порожні простори на готові до проживання, красиві та функціональні інтер'єри.",
            "filters": {
                "all": "Всі",
                "residential": "Квартири",
                "commercial": "Комерційні",
                "renovation": "Ремонт",
                "industrial": "Інше"
            },
            "viewProject": "Переглянути проєкт",
            "lightbox": {
                "clickToZoom": "Натисніть для збільшення",
                "clickToZoomOut": "Натисніть для зменшення"
            },
            "projects": {
                "1": {
                    "title": "Сучасна квартира",
                    "description": "Комплексне оздоблення квартири в сучасному стилі."
                },
                "2": {
                    "title": "Апартаменти лофт",
                    "description": "Оздоблення інтер'єру зі збереженням індустріального характеру."
                },
                "3": {
                    "title": "Капітальний ремонт будинку",
                    "description": "Повна реконструкція та заміна комунікацій в старому будинку."
                },
                "4": {
                    "title": "Офісний простір",
                    "description": "Адаптація приміщення під офісний простір."
                },
                "5": {
                    "title": "Квартира-студія під ключ",
                    "description": "Швидкий і надійний ремонт студії для здачі в оренду."
                },
                "6": {
                    "title": "Салон Преміум",
                    "description": "Ексклюзивне оздоблення з увагою до кожної деталі."
                },
                "7": {
                    "title": "Premium Salon",
                    "description": "Exclusive finishing with attention to every detail."
                },
                "8": {
                    "title": "Premium Salon",
                    "description": "Exclusive finishing with attention to every detail."
                },
                "9": {
                    "title": "Premium Salon",
                    "description": "Exclusive finishing with attention to every detail."
                }
            }
        },
        "services": {
            "tagline": "Наші послуги",
            "title": "Комплексне Оздоблення ",
            "titleHighlight": "Інтер'єрів",
            "description": "Ми пропонуємо повний спектр послуг з оздоблення, від консультацій та дизайну до фінального прибирання.",
            "items": {
                "residential": {
                    "title": "Оздоблення під ключ",
                    "description": "Комплексне оздоблення квартир і будинків від забудовника."
                },
                "commercial": {
                    "title": "Плиткові роботи",
                    "description": "Професійне укладання плитки, керамограніту, теракоти."
                },
                "renovation": {
                    "title": "Фарбування та Шпаклівка",
                    "description": "Гіпсова шпаклівка та ідеальне фарбування стін і стель."
                },
                "projectManagement": {
                    "title": "Електро та Сантехніка",
                    "description": "Повна переробка та модернізація інженерних мереж у квартирах."
                },
                "design": {
                    "title": "Підлоги та Панелі",
                    "description": "Укладання всіх видів дерев'яних підлог та панелей."
                },
                "consulting": {
                    "title": "Консультації",
                    "description": "Професійна допомога у виборі матеріалів та плануванні."
                }
            }
        },
        "about": {
            "tagline": "Більше про нас",
            "title": "Ми Робимо Ставку На ",
            "titleHighlight": "Якість і Своєчасність",
            "description": "ALT-remonty - це досвідчена команда, яка роками займається оздобленням квартир на найвищому рівні. Наші знання та відданість справі гарантують успіх кожного проєкту.",
            "descriptionSecondary": "Ми розуміємо, як важливий спокій під час ремонту. Тому ми дбаємо про своєчасність, надаємо поради на кожному етапі робіт і пропонуємо 2-річну гарантію на наші послуги. Якість завжди на першому місці.",
            "highlights": {
                "licensed": "Гарантія 2 роки",
                "safety": "Найвища якість виконання",
                "warranty": "Дотримання строків",
                "sustainable": "Професійні поради"
            },
            "stats": {
                "founded": "Годин консультацій",
                "employees": "Членів команди",
                "awards": "Років на ринку"
            }
        },
        "testimonials": {
            "tagline": "Відгуки клієнтів",
            "title": "Нам Довіряють ",
            "titleHighlight": "Задоволені Клієнти",
            "description": "Подивіться, що кажуть про нас люди, які довірили нам оздоблення своїх інтер'єрів.",
            "reviews": {
                "review1": {
                    "text": "Чудова співпраця! Ремонтні роботи виконані цілком професійно, все на вищому рівні. Увага буквально до кожної деталі. Надійна та відмінна комунікація. Щиро рекомендую і більше нікого іншого не шукатиму у разі нових ремонтів.",
                    "author": "Задоволений клієнт",
                    "role": "Власник квартири",
                    "location": "Оздоблення інтер'єру"
                },
                "review2": {
                    "text": "Професійний підхід до клієнта. Швидке вирішення проблеми, з якою зіткнулися, та дуже професійна консультація. Рекомендую.",
                    "author": "Задоволений клієнт",
                    "role": "Власник",
                    "location": "Оздоблення ванної кімнати"
                },
                "review3": {
                    "text": "Я дуже задоволений співпрацею з компанією Andrzej Łysakowski, яка проклала у мене нову електропроводку, а також зашпаклювала і пофарбувала стіни.\nПрофесійний підхід до клієнта, допомога на кожному етапі ремонту. Експрес-обслуговування, якість на найвищому рівні, чим я дуже задоволений. Чудова і злагоджена команда.\nДякую за співпрацю. :)",
                    "author": "Задоволений клієнт",
                    "role": "Індивідуальний клієнт",
                    "location": "Оздоблення інтер'єру"
                }
            }
        },
        "contact": {
            "tagline": "Контакти",
            "title": "Поговоримо про ваш ",
            "titleHighlight": "Проект",
            "description": "Телефонуйте або пишіть нам! Ми з радістю проконсультуємо та домовимося про безкоштовну оцінку.",
            "form": {
                "firstName": "Ім'я",
                "lastName": "Прізвище",
                "email": "E-mail",
                "phone": "Номер телефону",
                "projectType": "Тип замовлення",
                "projectTypes": {
                    "select": "Виберіть тип",
                    "residential": "Оздоблення від забудовника",
                    "commercial": "Генеральний ремонт",
                    "renovation": "Тільки ванна",
                    "industrial": "Дрібні роботи / Інше",
                    "other": "Інше"
                },
                "budget": "Орієнтовний бюджет",
                "budgets": {
                    "select": "Виберіть бюджет",
                    "under100k": "До 50 000 PLN",
                    "range100k500k": "50 000 - 150 000 PLN",
                    "range500k1m": "150 000 - 300 000 PLN",
                    "over1m": "Понад 300 000 PLN"
                },
                "message": "Деталі",
                "messagePlaceholder": "Коротко опишіть обсяг робіт...",
                "submit": "Відправити повідомлення",
                "submitting": "Відправлення..."
            },
            "info": {
                "title": "Контактні дані",
                "description": "Наша команда з радістю відповість на всі запитання.",
                "visit": "Офіс компанії",
                "call": "Зателефонуйте",
                "callHours": "Пн-Сб: 8:00 - 18:00",
                "email": "Напишіть нам",
                "emailResponse": "Відповідаємо якнайшвидше"
            }
        },
        "footer": {
            "description": "ALT-remonty: найвища якість, дотримання строків, професійні консультації та 2 роки гарантії. Ваш надійний підрядник.",
            "quickLinks": "Швидкі посилання",
            "services": "Послуги",
            "contactInfo": "Контакти",
            "newsletter": {
                "title": "Будьте в курсі",
                "description": "Якщо хочете дізнатися більше про наші вільні терміни.",
                "placeholder": "Ваш e-mail",
                "button": "Підписатися"
            },
            "rights": "Всі права захищені.",
            "links": {
                "privacy": "Політика конфіденційності",
                "terms": "Правила",
                "sitemap": "Карта сайту"
            }
        }
    },
    ru: {
        "nav": {
            "portfolio": "Работы",
            "services": "Услуги",
            "about": "О нас",
            "testimonials": "Отзывы",
            "contact": "Контакты",
            "getQuote": "Бесплатная оценка"
        },
        "hero": {
            "tagline": "ALT-remonty - Отделка Квартир",
            "title": "Ваш Интерьер, ",
            "titleHighlight": "Наша Точность",
            "description": "Высочайшее качество, своевременность и профессиональные консультации. Мы предоставляем 2 года гарантии на наши услуги, заботясь о каждой детали вашей квартиры.",
            "cta": "Свяжитесь с нами",
            "ctaSecondary": "Наши работы",
            "stats": {
                "years": "Лет Опыта",
                "projects": "Готовых Квартир",
                "countries": "Стран Деятельности",
                "warranty": "Года Гарантии"
            }
        },
        "portfolio": {
            "tagline": "Наши работы",
            "title": "Проекты, Которые Определяют ",
            "titleHighlight": "Совершенство",
            "description": "Посмотрите, как мы превращаем пустые пространства в готовые к проживанию, красивые и функциональные интерьеры.",
            "filters": {
                "all": "Все",
                "residential": "Квартиры",
                "commercial": "Коммерческие",
                "renovation": "Ремонт",
                "industrial": "Другое"
            },
            "viewProject": "Смотреть проект",
            "lightbox": {
                "clickToZoom": "Нажмите для увеличения",
                "clickToZoomOut": "Нажмите для уменьшения"
            },
            "projects": {
                "1": {
                    "title": "Современная квартира",
                    "description": "Комплексная отделка квартиры в современном стиле."
                },
                "2": {
                    "title": "Апартаменты лофт",
                    "description": "Отделка интерьера с сохранением индустриального характера."
                },
                "3": {
                    "title": "Капитальный ремонт дома",
                    "description": "Полная реконструкция и замена коммуникаций в старом доме."
                },
                "4": {
                    "title": "Офисное пространство",
                    "description": "Адаптация помещения под офисное пространство."
                },
                "5": {
                    "title": "Квартира-студия под ключ",
                    "description": "Быстрый и надежный ремонт студии для сдачи в аренду."
                },
                "6": {
                    "title": "Салон Премиум",
                    "description": "Эксклюзивная отделка с вниманием к каждой детали."
                },
                "7": {
                    "title": "Premium Salon",
                    "description": "Exclusive finishing with attention to every detail."
                },
                "8": {
                    "title": "Premium Salon",
                    "description": "Exclusive finishing with attention to every detail."
                },
                "9": {
                    "title": "Premium Salon",
                    "description": "Exclusive finishing with attention to every detail."
                }
            }
        },
        "services": {
            "tagline": "Наши услуги",
            "title": "Комплексная Отделка ",
            "titleHighlight": "Интерьеров",
            "description": "Мы предлагаем полный спектр услуг по отделке, от консультаций и дизайна до финальной уборки.",
            "items": {
                "residential": {
                    "title": "Отделка под ключ",
                    "description": "Комплексная отделка квартир и домов от застройщика."
                },
                "commercial": {
                    "title": "Плиточные работы",
                    "description": "Профессиональная укладка плитки, керамогранита, терракоты."
                },
                "renovation": {
                    "title": "Покраска и Шпаклевка",
                    "description": "Гипсовая шпаклевка и идеальная покраска стен и потолков."
                },
                "projectManagement": {
                    "title": "Электро и Сантехника",
                    "description": "Полная переделка и модернизация инженерных сетей в квартирах."
                },
                "design": {
                    "title": "Полы и Панели",
                    "description": "Укладка всех видов деревянных полов и панелей."
                },
                "consulting": {
                    "title": "Консультации",
                    "description": "Профессиональная помощь в выборе материалов и планировке."
                }
            }
        },
        "about": {
            "tagline": "Больше о нас",
            "title": "Мы Делаем Ставку На ",
            "titleHighlight": "Качество и Своевременность",
            "description": "ALT-remonty - это опытная команда, которая годами занимается отделкой квартир на высшем уровне. Наши знания и преданность делу гарантируют успех каждого проекта.",
            "descriptionSecondary": "Мы понимает, как важно спокойствие во время ремонта. Поэтому мы заботимся о своевременности, предоставляем советы на каждом этапе работ и предлагаем 2-летнюю гарантию на наши услуги. Качество всегда на первом месте.",
            "highlights": {
                "licensed": "Гарантия 2 года",
                "safety": "Высшее качество",
                "warranty": "Соблюдение сроков",
                "sustainable": "Профессиональные советы"
            },
            "stats": {
                "founded": "Часов Консультаций",
                "employees": "Членов Команды",
                "awards": "Лет на рынке"
            }
        },
        "testimonials": {
            "tagline": "Отзывы клиентов",
            "title": "Нам Доверяют ",
            "titleHighlight": "Довольные Клиенты",
            "description": "Посмотрите, что говорят о нас люди, которые доверили нам отделку своих интерьеров.",
            "reviews": {
                "review1": {
                    "text": "Отличное сотрудничество! Ремонтные работы выполнены в полной мере профессионально, все на высшем уровне. Внимание буквально к каждой детали. Надежная и отличная коммуникация. Искренне рекомендую и больше никого искать не буду в случае новых ремонтов.",
                    "author": "Довольный клиент",
                    "role": "Владелец квартиры",
                    "location": "Отделка интерьера"
                },
                "review2": {
                    "text": "Профессиональный подход к клиенту. Быстрое решение возникшей проблемы, а также весьма профессиональная консультация. Рекомендую.",
                    "author": "Довольный клиент",
                    "role": "Владелец",
                    "location": "Отделка ванной"
                },
                "review3": {
                    "text": "Я очень доволен сотрудничеством с компанией Andrzej Łysakowski, которая проложила у меня новую электропроводку, а также зашпаклевала и покрасила стены.\nПрофессиональный подход к клиенту, помощь на каждом этапе ремонта. Экспресс-обслуживание, качество на высшем уровне, чем я очень доволен. Отличная и слаженная команда.\nСпасибо за сотрудничество. :)",
                    "author": "Довольный клиент",
                    "role": "Индивидуальный клиент",
                    "location": "Отделка интерьера"
                }
            }
        },
        "contact": {
            "tagline": "Контакты",
            "title": "Поговорим о вашем ",
            "titleHighlight": "Проекте",
            "description": "Звоните или пишите нам! Мы с радостью проконсультируем и договоримся о бесплатной оценке.",
            "form": {
                "firstName": "Имя",
                "lastName": "Фамилия",
                "email": "E-mail",
                "phone": "Номер телефона",
                "projectType": "Тип заказа",
                "projectTypes": {
                    "select": "Выберите тип",
                    "residential": "Отделка от застройщика",
                    "commercial": "Генеральный ремонт",
                    "renovation": "Только ванная",
                    "industrial": "Мелкие работы / Другое",
                    "other": "Другое"
                },
                "budget": "Ориентировочный бюджет",
                "budgets": {
                    "select": "Выберите бюджет",
                    "under100k": "До 50 000 PLN",
                    "range100k500k": "50 000 - 150 000 PLN",
                    "range500k1m": "150 000 - 300 000 PLN",
                    "over1m": "Свыше 300 000 PLN"
                },
                "message": "Детали",
                "messagePlaceholder": "Кратко опишите объем работ...",
                "submit": "Отправить сообщение",
                "submitting": "Отправка..."
            },
            "info": {
                "title": "Контактные данные",
                "description": "Наша команда с радостью ответит на все вопросы.",
                "visit": "Офис компании",
                "call": "Позвоните нам",
                "callHours": "Пн-Сб: 8:00 - 18:00",
                "email": "Напишите нам",
                "emailResponse": "Отвечаем как можно быстрее"
            }
        },
        "footer": {
            "description": "ALT-remonty: высочайшее качество, соблюдение сроков, профессиональные консультации и 2 года гарантии. Ваш надежный подрядчик.",
            "quickLinks": "Быстрые ссылки",
            "services": "Услуги",
            "contactInfo": "Контакты",
            "newsletter": {
                "title": "Будьте в курсе",
                "description": "Если хотите узнать больше о наших свободных датах.",
                "placeholder": "Ваш e-mail",
                "button": "Подписаться"
            },
            "rights": "Все права защищены.",
            "links": {
                "privacy": "Политика конфиденциальности",
                "terms": "Правила",
                "sitemap": "Карта сайта"
            }
        }
    },
    en: {
        "nav": {
            "portfolio": "Portfolio",
            "services": "Services",
            "about": "About",
            "testimonials": "Testimonials",
            "contact": "Contact",
            "getQuote": "Get Quote"
        },
        "hero": {
            "tagline": "ALT-remonty - Apartment Finishing",
            "title": "Your Interior, ",
            "titleHighlight": "Our Precision",
            "description": "Highest quality, timely delivery, and professional advice. We provide a 2-year warranty on our services, taking care of every detail of your apartment.",
            "cta": "Contact Us",
            "ctaSecondary": "Our Work",
            "stats": {
                "years": "Years Experience",
                "projects": "Finished Apartments",
                "countries": "Countries of Operation",
                "warranty": "Years Warranty"
            }
        },
        "portfolio": {
            "tagline": "Our Portfolio",
            "title": "Projects That Define ",
            "titleHighlight": "Excellence",
            "description": "See how we transform empty spaces into move-in ready, beautiful, and functional interiors.",
            "filters": {
                "all": "All",
                "residential": "Residential",
                "commercial": "Commercial",
                "renovation": "Renovation",
                "industrial": "Other"
            },
            "viewProject": "View Project",
            "lightbox": {
                "clickToZoom": "Click to zoom",
                "clickToZoomOut": "Click to zoom out"
            },
            "projects": {
                "1": {
                    "title": "Modern Apartment",
                    "description": "Comprehensive apartment finishing in modern style."
                },
                "2": {
                    "title": "Loft Apartment",
                    "description": "Interior finishing preserving the industrial character."
                },
                "3": {
                    "title": "Tenement Overhaul",
                    "description": "Complete reconstruction and utility replacement in an old tenement house."
                },
                "4": {
                    "title": "Office Space",
                    "description": "Adaptation of premises for office space."
                },
                "5": {
                    "title": "Turnkey Studio",
                    "description": "Fast and solid renovation of a studio for rent."
                },
                "6": {
                    "title": "Premium Salon",
                    "description": "Exclusive finishing with attention to every detail."
                },
                "7": {
                    "title": "Premium Salon",
                    "description": "Exclusive finishing with attention to every detail."
                },
                "8": {
                    "title": "Premium Salon",
                    "description": "Exclusive finishing with attention to every detail."
                },
                "9": {
                    "title": "Premium Salon",
                    "description": "Exclusive finishing with attention to every detail."
                }
            }
        },
        "services": {
            "tagline": "Our Services",
            "title": "Comprehensive Interior ",
            "titleHighlight": "Finishing",
            "description": "We offer a full range of finishing services, from consulting and design to final cleaning.",
            "items": {
                "residential": {
                    "title": "Turnkey Finishing",
                    "description": "Comprehensive finishing of apartments and houses from developer's standard."
                },
                "commercial": {
                    "title": "Tiling Works",
                    "description": "Professional laying of tiles, porcelain stoneware, terracotta."
                },
                "renovation": {
                    "title": "Painting and Plastering",
                    "description": "Gypsum plastering and perfect painting of walls and ceilings."
                },
                "projectManagement": {
                    "title": "Electrical & Plumbing",
                    "description": "Complete remodeling and modernization of utility systems in apartments."
                },
                "design": {
                    "title": "Floors & Panels",
                    "description": "Laying all types of wooden floors and panels."
                },
                "consulting": {
                    "title": "Advisory",
                    "description": "Professional assistance in choosing materials and layout."
                }
            }
        },
        "about": {
            "tagline": "More About Us",
            "title": "We Focus On ",
            "titleHighlight": "Quality and Timeliness",
            "description": "ALT-remonty is an experienced crew that has been dealing with apartment finishing at the highest level for years. Our knowledge and dedication guarantee the success of every project.",
            "descriptionSecondary": "We understand how important peace of mind is during a renovation. That's why we ensure timely delivery, provide advice at every stage, and offer a 2-year warranty on our services. Quality is always our top priority.",
            "highlights": {
                "licensed": "2-year Warranty",
                "safety": "Highest quality",
                "warranty": "Meeting deadlines",
                "sustainable": "Professional advice"
            },
            "stats": {
                "founded": "Hours of Advisory",
                "employees": "Team Members",
                "awards": "Years on the Market"
            }
        },
        "testimonials": {
            "tagline": "Client Reviews",
            "title": "Trusted by ",
            "titleHighlight": "Happy Clients",
            "description": "Check out what people who entrusted us with their interiors have to say about us.",
            "reviews": {
                "review1": {
                    "text": "Excellent cooperation! Renovation works carried out fully professionally, everything spot on. Attention to literally every detail. Reliable and perfect communication. Honestly recommend and I will not look for anyone else in the case of new renovations.",
                    "author": "Happy Client",
                    "role": "Apartment Owner",
                    "location": "Interior Finishing"
                },
                "review2": {
                    "text": "Professional approach to the client. Quick resolution of the encountered problem, and very professional advice. Recommended.",
                    "author": "Happy Client",
                    "role": "Owner",
                    "location": "Bathroom Finishing"
                },
                "review3": {
                    "text": "I am very satisfied with the cooperation with the company Andrzej Łysakowski, who laid a new electrical installation for me, as well as plastered and painted the walls.\nProfessional approach to the client, help at every stage of the renovation. Express service, highest quality, which I am very happy with. A great and well-coordinated team.\nThanks for the cooperation. :)",
                    "author": "Happy Client",
                    "role": "Individual Client",
                    "location": "Interior Finishing"
                }
            }
        },
        "contact": {
            "tagline": "Contact",
            "title": "Let's Talk About Your ",
            "titleHighlight": "Project",
            "description": "Call or write to us! We'd be happy to advise and arrange a free quote.",
            "form": {
                "firstName": "First Name",
                "lastName": "Last Name",
                "email": "Email",
                "phone": "Phone Number",
                "projectType": "Project Type",
                "projectTypes": {
                    "select": "Select type",
                    "residential": "Developer Finishing",
                    "commercial": "General Overhaul",
                    "renovation": "Bathroom only",
                    "industrial": "Minor Works / Other",
                    "other": "Other"
                },
                "budget": "Estimated Budget",
                "budgets": {
                    "select": "Select budget",
                    "under100k": "Under 50,000 PLN",
                    "range100k500k": "50,000 - 150,000 PLN",
                    "range500k1m": "150,000 - 300,000 PLN",
                    "over1m": "Over 300,000 PLN"
                },
                "message": "Details",
                "messagePlaceholder": "Briefly describe the scope of work...",
                "submit": "Send Message",
                "submitting": "Sending..."
            },
            "info": {
                "title": "Contact Info",
                "description": "Our team will be happy to answer any questions.",
                "visit": "Company Office",
                "call": "Call Us",
                "callHours": "Mon-Sat: 8AM - 6PM",
                "email": "Write to Us",
                "emailResponse": "We reply as soon as possible"
            }
        },
        "footer": {
            "description": "ALT-remonty: highest quality, meeting deadlines, professional advice, and a 2-year warranty. Your reliable contractor.",
            "quickLinks": "Quick Links",
            "services": "Services",
            "contactInfo": "Contact",
            "newsletter": {
                "title": "Stay Updated",
                "description": "If you want to know more about our available dates.",
                "placeholder": "Your e-mail",
                "button": "Subscribe"
            },
            "rights": "All rights reserved.",
            "links": {
                "privacy": "Privacy Policy",
                "terms": "Terms of Service",
                "sitemap": "Sitemap"
            }
        }
    }
};
export type Translations = typeof translations.pl;
