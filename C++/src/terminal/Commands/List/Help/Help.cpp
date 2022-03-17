#include "Help.hpp"

Help::Help() : Command(0, "Help") 
{
}

Help::~Help()
{
}

int Help::Run() const
{
    std::cout << "help menu" << std::endl;
}