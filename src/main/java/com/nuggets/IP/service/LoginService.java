package com.nuggets.IP.service;

import com.nuggets.IP.controller.rest.request.LoginBody;

public interface LoginService {
    String login(LoginBody loginBody);
}
