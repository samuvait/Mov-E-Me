#!/bin/bash

sudo fuser -k 3000/tcp

rm -rf /home/ec2-user/code/mov-e-me

mkdir -p /home/ec2-user/code/mov-e-me
