#!/bin/bash

cd /home/ec2-user/code/mov-e-me/mov-e-me

serve -s build -l 3000 </dev/null &>/dev/null &
