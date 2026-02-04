import Link from "next/link";
import { FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";
import { PiMicrosoftOutlookLogoFill } from "react-icons/pi";

const Socials = [
    {
        icon: <FaGithub />,
        link: "https://github.com/atlasracinghwud"
    },
    {
        icon: <FaInstagram />,
        link: "https://www.instagram.com/atlasracinghwud/"
    },
    {
        icon: <FaLinkedin />,
        link: "https://www.linkedin.com/company/atlasracinghwud/"
    },
    {
        icon: <PiMicrosoftOutlookLogoFill />,
        link: "mailto:atlasracing@hw.ac.uk"
    },
]

const Social = ({ containerStyles, iconStyles }) => {
    return (
        <div className={containerStyles}>
            {Socials.map((social, index) => {
                return <Link key={index} href={social.link} className={iconStyles}>{social.icon}</Link>
            })}
        </div>
    )
}

export default Social