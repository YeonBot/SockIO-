import React, { useReducer } from 'react';
import * as userService from 'services/userService';

function reducer(state, action) {
	return {
		...state,
		[action.name]: action.value
	};
}

const Login = (props) => {
	
	const [state,dispatch] = useReducer(reducer,{email:'',password:''});
	
	const {email,password} = state;
	const onChange = e => {
		dispatch(e.target);
	}
	
	const onClick = () => {
		console.log('onClick');
		//TODO: 데이터가 비진 않았는지 check
		//이메일 형식인지
		
		userService.login({
			email:email,
			password:password
		},props);
	};	
	
	return (
		<div className="text-center">
			<div className="form-signin">
				<img
					className="mb-4"
					alt=""
					src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQrhRq8OwKDpafPNc-6QTjaIwILBSCHqvfqnI_CVh2utdPh6QOZ"
					width="72"
					height="72"
				/>
				<h1 className="h3 mb-3 font-weight-normal">로그인 해주세요</h1>
				<input
					type="email"
					className="form-control"
					placeholder="이메일"
					name="email"
					value={email}
					onChange={onChange}
					required
					autoFocus
				/>
				<input
					type="password"
					className="form-control"
					placeholder="비밀번호"
					name="password"
					value={password}
					onChange={onChange}
					required
				/>
				<div className="checkbox mb-3">
					<label>
						<input type="checkbox" value="remember-me" /> Remember me
					</label>
				</div>
				<button className="btn btn-lg btn-primary btn-block" onClick={onClick}>
					로그인
				</button>
				<p className="mt-5 mb-3 text-muted">계정이 없으신가요 ? 회원가입</p>
			</div>
		</div>
	);
};

export default Login;