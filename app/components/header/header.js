import styles from './header.module.css';
import Image from 'next/image';

export default function Header() {
	const headerLinks = [
		{text: 'Uvod', url: '/uvod'},
		{text: 'Sluzby', url: '/sluzby'},
		{text: 'Reference', url: '/reference'},
		{text: 'Kontakty', url: '/kontakty'},
		{text: 'Kariera', url: '/kariera'},
	]

	return (
		<header className={styles.header}>
			<div className='d-flex'>
				<div><Image
					src="/abuco-logo.svg"
					alt="Abuco Logo"
					className={styles.vercelLogo}
					width={186}
					height={39}
					priority
				/></div>
				<nav>
					{headerLinks.map((link) => (
						<div key={link.text}><a href={link.url}>{link.text}</a></div>
					))}
				</nav>
				<div>
					<div>+420 212 247 585</div>
					<div>podpora@abuco.cz</div>
				</div>
			</div>
		</header>
	)
}
