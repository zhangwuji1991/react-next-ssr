
import Layout from './components/layout'
import '../styles/index.sass'

// 无状态组件
export default ({url}) => (
	<div>
		<Layout>
			<h2>detail-详情页面</h2>
			{url.query.arg}
		</Layout>
		
	</div>
)

