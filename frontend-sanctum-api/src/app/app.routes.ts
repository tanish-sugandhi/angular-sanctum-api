import { Routes } from '@angular/router';
import { LoginComponent } from './login/login/login.component';
import { HomeComponent } from './home/home/home.component';
import { RegisterComponent } from './register/register/register.component';
import { ForgotPasswordComponent } from './forgotPassword/forgot-password/forgot-password.component';
import { Component } from '@angular/core';
import { ResetPasswordComponent } from './resetPassword/reset-password/reset-password.component';
import { AntdDesignComponent } from './antd/antd-design/antd-design.component';

export const routes: Routes = [
    {
        path: '',
        component:LoginComponent
    },
    {
        path: 'home',
        component:HomeComponent
    },
    {
        path: 'register',
        component:RegisterComponent
    },
    {
        path: 'forgotPassword',
        component:ForgotPasswordComponent
    },
    {
        path: 'resetPassword/:token',
        component:ResetPasswordComponent
    },
    {
        path: 'antd',
        component:AntdDesignComponent
    }
];
