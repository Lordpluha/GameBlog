import styles from './FullNews.module.scss'

/**
 * The FullNews component is a TypeScript React component that displays the full text of a news
 * article.
 * @param  - The FullNews component takes in a single parameter called fullText, which is a string.
 * This parameter represents the full text of a news article.
 */
const FullNews = ({ fullText }: { fullText: string }) => {
	return (
		<div className={styles.newsfulltext}>
			<p>{fullText}</p>
		</div>
	)
}

export default FullNews
