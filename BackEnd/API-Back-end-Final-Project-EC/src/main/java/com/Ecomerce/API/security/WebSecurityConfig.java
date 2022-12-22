package com.Ecomerce.API.security;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.config.annotation.authentication.builders.AuthenticationManagerBuilder;
import org.springframework.security.config.annotation.method.configuration.EnableGlobalMethodSecurity;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;
import org.springframework.security.config.http.SessionCreationPolicy;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.security.web.authentication.AuthenticationFilter;
import org.springframework.security.web.authentication.UsernamePasswordAuthenticationFilter;

@Configuration
@EnableWebSecurity
@EnableGlobalMethodSecurity(prePostEnabled = true)
public class WebSecurityConfig extends WebSecurityConfigurerAdapter{

	@Autowired
	private JWTUserDetailsService userDetailsService;

	@Autowired
	private JwtAuthenticationEntryPoint jwtAuthenticationEntryPoint;
	
	@Autowired
	private JwtRequestFilter customJwtAuthenticationFilter;
	
	@Bean
	public PasswordEncoder passwordEncoder() {
		return new BCryptPasswordEncoder();
	}
//
	@Override
	public void configure(AuthenticationManagerBuilder auth) throws Exception {
		auth.userDetailsService(userDetailsService).passwordEncoder(passwordEncoder());
	}

	@Bean
	@Override
	public AuthenticationManager authenticationManagerBean() throws Exception {
		return super.authenticationManagerBean();
	}

	@Override
	public void configure(HttpSecurity http) throws Exception {
		http
		.cors()
		.and()
		.csrf().disable()
		.exceptionHandling().authenticationEntryPoint(jwtAuthenticationEntryPoint)
		.and()
		.authorizeRequests()
		.antMatchers("/api/auth/admin/**").hasRole("ADMIN")
		.antMatchers("/api/auth/user/**").hasAnyRole("USER","ADMIN")
		.antMatchers("/register","/login", "/api/products/**", "/api/auctions/**", "/api/users/**", 
				"/api/categories/**", "/api/userstore/**").permitAll()
		.anyRequest().authenticated()
		.and()
		.sessionManagement().sessionCreationPolicy(SessionCreationPolicy.STATELESS)
		.and()
		.addFilterBefore(customJwtAuthenticationFilter, UsernamePasswordAuthenticationFilter.class)
		;
	}
}
