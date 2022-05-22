###  https://www.rubyguides.com/2015/05/working-with-files-ruby/

file = File.open("file.txt")
# file_data = file.read
file_data = file.readlines.map(&:chomp)
puts file_data[2]

0 R name=sidney service=pppoe caller-id=00:1A:3F:F6:D2:02 address=172.21.1.210 uptime=1d8h8m10s encoding="" session-id=0x81D00000 limit-bytes-in=0 limit-bytes-out=0 
 1 

# ["user1", "user2", "user3"]


# //////////////
# file_data = File.read("user.txt").split

# ["user1", "user2", "user3"]


# File.foreach("users.txt") { |line| puts line }