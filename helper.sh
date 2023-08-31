echo "Hello, there! I'm a helper tool that's going to help log you into the server and change your password."
echo "make sure that you get your username (Like \"web404\") before logging in."
read -n 1 -p "Press any key when you're ready..."
echo 
read -p "Enter your username: " uname
read -s -p "Enter your password: " pass
echo 
ssh "$uname@192.168.10.101"
