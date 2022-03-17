#ifndef TERMINAL_HPP_
#define TERMINAL_HPP_

#include <iostream>
#include <string>
#include <map>

enum Front {React, Angular};
enum Back {Node, Ruby};

class Terminal {
    public:
        Terminal();
        ~Terminal();
        int Run();
    protected:
    private:
        Front current_front;
        Back current_back;
        std::map<std::string, int> commands;
        int RunCommand(std::string cmd);

};

#endif