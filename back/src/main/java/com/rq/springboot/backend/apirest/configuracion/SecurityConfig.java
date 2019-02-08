package com.rq.springboot.backend.apirest.configuracion;

import org.springframework.context.annotation.Configuration;
import org.springframework.core.annotation.Order;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;
import org.springframework.security.web.access.channel.ChannelProcessingFilter;

@Configuration
@EnableWebSecurity
@Order(1)
public class SecurityConfig extends WebSecurityConfigurerAdapter{

	 @Override
	    protected void configure(HttpSecurity http) throws Exception {
	        http
	        .exceptionHandling().and()
	        .anonymous().and()
	        .csrf().disable()
	        .addFilterBefore(new CorsFilter(), ChannelProcessingFilter.class)
	        /*.authorizeRequests()
	        .anyRequest().a;*/
	        ;
	    }
	
}
