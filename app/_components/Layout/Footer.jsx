import Link from "next/link";

const Footer = () => {
    const navItem = [
        {
            display: "Home",
            slug: "/",
        },
         {
            display: "about",
            slug: "/about",
        },
         {
            display: "Blog",
            slug: "/blog",
        },
         {
            display: "Contact",
            slug: "/contact",
        }

    ];
    const policies = [
        {
        display: "Imprint",
        slug:  "/imprint"
        },
         {
        display: "Term and Condition",
        slug:  "/imprint"
        },

        {
            display: "Data Protection",
            slug: "/imprint"
        }
]

    return (
 <footer className="footer">
<nav className="footer__nav">
    <img className="footer__logo" src="\assets\WhatsApp_Image_2024-12-30_at_06.02.59_bd23cc54-removebg-preview.png"/>
     <ul className="footer__links">
        {navItem.map((item) => (
            <li key={item.slug}>
                <Link href={item.slug}>
                <h5>{item.display}</h5>
                </Link>
                </li>
            ))}</ul>
            </nav>
            <div className="footer__policies">
                <ul className="footer__nav">
                    {policies.map((policy) => (
                        <li key={policy.slug}>
                          <p> {policy.display}</p> 
                        </li>
                    ))}

                </ul>
                <p className="cop">@ Jaaliyadda Somalida Istanbul - all rights reserved </p>
            </div>
 </footer>
    )
}

export default Footer ;