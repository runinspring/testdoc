import React from 'react';
import useBaseUrl from '@docusaurus/useBaseUrl';

export default class Main extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            toolLink: '',//下载地址
            os: "win",//操作系统的类型
        }

    }
    componentDidMount() {
        let ua = navigator.userAgent.toLowerCase();
        let os = ua.indexOf("mac os") !== -1 ? "mac" : "win";
        console.log('os type2', os)
        let toolLink = "http://tool.egret-labs.org/EgretLauncher/EgretLauncher-1.1.5"
        toolLink += os === 'win' ? ".exe" : ".dmg";//给一个默认的下载地址，防止后台服务器挂了
        this.setState({
            os: os,
            toolLink: toolLink
        })
        let fetchOpt = {
            method: 'GET',
            mode: 'cors',
            headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
            cache: 'default'
        }
        let url = "https://devcenter.egret.com/getToolLink?"
        url += JSON.stringify({ "tool": 'EgretLauncher' })
        url = encodeURI(url)
        // let { os } = this.state
        fetch(url, fetchOpt).then(res => res.json()).then(data => {
            if (data && data.data && data.data[os]) {
                this.setState({ toolLink: data.data[os] })
            }
        })
    }
    render() {
        const PageButton = (props) => {
            const link = useBaseUrl(props.link)
            return (
                <div className="pageButton pageButtonLink" style={{ marginRight: 20 }} onClick={() => { window.location.href = link }}>
                    {props.title}
                </div>
            )
        }
        function PageDownloadButton(props) {
            const link = useBaseUrl(props.link)
            return (
                <div className="pageButton" style={{ marginRight: 20 }} onClick={() => { window.open(link) }}>
                    {props.title}
                </div>
            )
        }
        const Preview = ({ src }) => {
            const link = useBaseUrl(src)
            return <img className="perviewImg" alt="egret-image" src={link} />
        }
        const manualUrl = 'docs/manual/manual'
        const libUrl = 'docs/particle/introduction'
        const imgUrl = "img/preview.png"
        const apiUrl = "docs/api/particle.GravityParticle"
        const particleUrl = "https://github.com/egret-labs/egret-game-library/tree/master/particle"
        return (
            <div>
                <div className="pageDetail">
                    <h1 className="doc_title">{this.props.title}</h1>
                    <span className="doc_content">可视化粒子编辑器</span>
                    <div style={{ marginTop: 25, marginBottom: 10 }}>
                        <PageButton title='使用编辑器' link={manualUrl} />
                        <PageButton title='使用粒子库' link={libUrl} />
                        <PageButton title='粒子库 API' link={apiUrl} />
                        <PageDownloadButton title='下载编辑器' link={this.state.toolLink} />
                        <PageDownloadButton title='下载粒子库' link={particleUrl} />
                    </div>
                    <Preview src={imgUrl} />
                </div>
                <main>
                    <div style={{ textAlign: "center" }}>
                        <div className="doc_description">
                            Egret Feather 是一款粒子编辑器，各个参数的组合塑造出千变万化的效果，为游戏添姿添彩。全程可视化编辑操作，屏蔽所有底层复杂的参数设置。
                            所见即所得的操作模式，让即使毫无编程技能的美术人员也可快速上手，立即制作出精美的粒子效果。编辑器可以自动导出配置文件供程序开发使用。
                        </div>
                    </div>
                </main>
            </div>
        )
    }
}
