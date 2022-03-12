SRC = 	main.cpp \
		terminal/Terminal.cpp

COMMON_SRC = $(addprefix src/, $(SRC))

OBJ = $(COMMON_SRC:.cpp=.o)

NAME = WebChanger

CXX = g++

CXXFLAGS = -Wall -Wextra -g

all: $(NAME)

$(NAME): $(OBJ)
	$(CXX) -o $(NAME) $(LD_FLAGS) $(OBJ)

clean:
	rm -f $(OBJ)

fclean: clean
	rm -f $(NAME)

re: fclean all

.PHONY: all re fclean clean