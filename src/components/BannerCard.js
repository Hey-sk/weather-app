import styles from '@/styles/Home.module.css'

export default function BannerCard({title, description, contents, contentStyle}) {
    return (
        <>
            <section className={styles.bannerCard}>
                <div className={styles.bannerTitle}>{title}</div>
                <div className={styles.bannerDescription}>{description}</div>
                <div style={{gridColumn:'1/-1'}} className={contentStyle}>{contents}</div>
            </section>
        </>
    )
}