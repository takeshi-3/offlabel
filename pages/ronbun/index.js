// react
import {useEffect, useState, useRef} from 'react';

// next components

// custom components
import {LayoutNormal} from '../../components/layout';
import {AcademyHero} from '../../components/parts';
import PageTitle from '../../components/pageTitle';
import {RoundButton} from '../../components/buttons';

// styles
import styles from '../../styles/ronbun.module.scss';

// animation
import {useSpring, animated, config, useChain, useTransition} from 'react-spring';
import {useInView} from 'react-intersection-observer';


// fetch data from contentful
const client = require('contentful').createClient({
    space: process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID,
    accessToken: process.env.NEXT_PUBLIC_CONTENTFUL_ACCESS_TOKEN
});

export const getServerSideProps = async () => {
    const ronbun = await client.getEntries({content_type: 'ronbun'});
    return {
        props: {
            ronbun
        }
    }
};

const Modal = ({image, onClose}) => {

    const backSpring = useSpring({
        from: {opacity: 0},
        to: {opacity: 1}
    });

    const imageSpring = useSpring({
        from: {opacity: 0, transform: 'scale(0.5)'},
        to: {opacity: 1, transform: 'scale(1)'},
        config: config.stiff
    });

    return (
        <animated.div style={backSpring} className={styles.modal}>
            <animated.img style={imageSpring} src={image} />
            <div className={styles.modal_close}>
                <span onClick={onClose}><RoundButton>閉じる</RoundButton></span>
            </div>
        </animated.div>
    );
};

const Ronbun = ({ronbun}) => {
    const [modal, setModal] = useState(false);
    const [modalImage, setModalImage] = useState('');

    const [ref, inView] = useInView({
        threshold: 0.5,
        triggerOnce: true,
    });

    const itemSpring = useTransition(inView ? ronbun.items : [], item => item.sys.id, {
        unique: true,
        trail: 1000 / ronbun.items.length,
        from: {opacity: 0, transform: 'scale(0)'},
        enter: {opacity: 1, transform: 'scale(1)'},
    });

    const handleOnModal = (e) => {
        setModal(true);
        setModalImage(e.target.getAttribute('src'));
    };

    const handleCloseModal = (e) => {
        setModal(false);
    };

    return (
        <LayoutNormal title="100人論文">
            <AcademyHero image={"/images/ronbunBack2.jpg"} />
            <div className={styles.title}><PageTitle>100人論文</PageTitle></div>

            <section className={styles.exp}>
                <p>
                    １００人論文企画は、発案者である京都大学学際融合教育研究推進センターにアドバイスを受けながら研究のアウトリーチを目的として立ち上がった企画です。<br /><br />
                    皆さまが日頃取り組まれている研究内容やその社会的意義を掲示してただき、来場者や院生が、互いの研究や関心事を紹介しあって意見交換する場を提供することを目的としています。
                    OFF LABEL独自のコンテンツとしては、研究者自身がアカデミアとしての道を選んだ経緯も紹介しています。 研究を身近に捉え、自らが「考えること」「研究」の担い手になるきっかけ作りなることを願っています。<br /><br />
                    こちらの企画は自身研究のアウトリーチを行いたいと考えいている方は誰でも参加が可能なため、参加希望の場合は以下のリンクにて質問に回答の上、ご参加いただけます。
                </p>
                <div className={styles.join}>
                    <a target="_blank" href="https://forms.gle/XpvAvi8EDg6UJmhB8"><RoundButton>100人論文に参加する</RoundButton></a>
                </div>
            </section>

            <section className={styles.cont} ref={ref}>
                {ronbun.items.length > 0 ?
                    itemSpring.map(({item, key, props}) => (
                        <animated.img 
                            src={item.fields.ronbun.fields.file.url} 
                            key={key} 
                            style={{...props}} 
                            className={styles.cont_img} 
                            onClick={(e) => handleOnModal(e)}
                        />
                )) : null}
            </section>
            
            {modal ? <Modal image={modalImage} onClose={handleCloseModal} /> : null}
        </LayoutNormal>
    )
};

export default Ronbun;