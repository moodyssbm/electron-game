#!/bin/bash
sass ./css/main.sass ./css/main.css
npm start

if [ $1 -eq "p" ]
then 
