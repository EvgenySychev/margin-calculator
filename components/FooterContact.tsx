import style from './FooterContacts.module.css'

type contactsType = {
    id: number
    link: string
    title: string
}

export const FooterContacts = () => {

    const contacts: contactsType[] = [
        {
            id: 1,
            link: 'https://EvgenySychev.github.io/my-portfolio',
            title: 'Portfolio'
        },
        {
            id: 2,
            link: 'https://t.me/easychev',
            title: 'Telegram'
        },
        {
            id: 3,
            link: 'https://github.com/EvgenySychev/payment-terminal.git',
            title: 'GitHub'
        }
    ]

    return (
        <div style={{marginTop: "20px", fontSize: "13px", textAlign: "center"}}>
            Created by
            <b> Evgeny Sychev</b>
            <div className={style.socials}>
                {contacts.map(c => <div key={c.id}>
                    <a href={c.link}
                       target="_blank">
                        <span>{c.title}</span>
                    </a>
                </div>)}
            </div>
        </div>)
}