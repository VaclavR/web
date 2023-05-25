import styles from './header.module.scss';
import Image from 'next/image';

export default function Header() {
	const headerLinks = [
		{text: 'Úvod', url: '/uvod'},
		{text: 'Služby', url: '/sluzby'},
		{text: 'Reference', url: '/reference'},
		{text: 'Kontakty', url: '/kontakty'},
		{text: 'Kariéra', url: '/kariera'},
	]

	return (
		<header className={styles.header}>
			<div className='d-flex space-between'>
				<div className={styles.logo}><Image
					src="/abuco-logo.svg"
					alt="Abuco Logo"
					width={186}
					height={39}
					priority
				/></div>
				<nav className='d-flex align-center'>
					{headerLinks.map((link) => (
						<div className={styles.item} key={link.text}>
							<a className={styles.link} href={link.url}>{link.text}</a>
						</div>
					))}
				</nav>
				<div className={styles.support}>
					<div className='uppercase bold'>Technická podpora:</div>
					<div>+420 212 247 585</div>
					<div>podpora@abuco.cz</div>
				</div>
			</div>
		</header>
	)
}
